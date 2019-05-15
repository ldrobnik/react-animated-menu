import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faPlane,
    faCreditCard,
    faLifeRing,
    faPhone,
    faSignOutAlt,
    faQuestionCircle,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

/* STYLES */
const LinkContainer = styled.p`
  margin: 0.5em;
  border-top: solid 1px #F8B6B8;
  padding: 8px 2px 2px 2px;
  
  :first-of-type {
  border-top: none;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
`;


function DesktopMenu(props) {

    /* Menu link data:
*   name - name to be displayed
*   route - route activated by clicking
*   icon - fontawesome icon to be used
*   rotation - degrees of rotation of the icon
* */
    const menuLinks = [
        {
            name: 'Profile',
            route: '/profile/' + (props.firstName + props.surname).toLowerCase() + '/',
            icon: faUserCircle,
            rotation: 0
        },
        {
            name: 'My Bookings',
            route: '/bookings/',
            icon: faPlane,
            rotation: 315
        },
        {
            name: 'My Payments',
            route: '/payments/',
            icon: faCreditCard,
            rotation: 0
        },
        {
            name: 'Support',
            route: '/support/',
            icon: faLifeRing,
            rotation: 0
        },
        {
            name: 'Contact Us',
            route: '/contact/',
            icon: faPhone,
            rotation: 90
        },
        {
            name: 'Log Out',
            route: '/logout/',
            icon: faSignOutAlt,
            rotation: 0
        },
        {
            name: 'About',
            route: '/about/',
            icon: faQuestionCircle,
            rotation: 0
        },
        {
            name: 'FAQ',
            route: '/faq/',
            icon: faInfoCircle,
            rotation: 0
        }
    ];

    return (
        <React.Fragment>
            <div>Mobile Menu</div>
            {menuLinks.map((link) => (
                <LinkContainer
                    key={link.name}
                    onClick={props.hideMenu}
                >
                    <MenuLink to={link.route}>
                            <MenuIcon icon={link.icon} transform={{rotate: link.rotation}}/>
                        {link.name}
                    </MenuLink>
                </LinkContainer>
            ))}
            <button onClick={props.hideMenu}>Close</button>
        </React.Fragment>
    );
}

export default DesktopMenu;