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
import logoImage from '../../../assets/images/awaymoFullWhite.svg';

/* STYLES */

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
 
  
  z-index: 200;
  
  background-color: ${props => props.theme.mainColor};
  
  ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
        }
`;

const Logo = styled.div`
    text-align: center;
    margin: 0.1em;
`;

const Header = styled.div`
  position: relative;
`;

const ExitButton = styled.div`
  position: absolute;
    top: 0.2em;
    right: 0.5em;
    
    user-select: none;
    
    :hover {
      color: ${props => props.theme.lightMainColor}
    }
`;

const LinkContainer = styled.p`
  margin: 0;
  border-top: solid 1px ${props => props.theme.lightMainColor};
  padding: 8px 6px;
  
  :first-of-type {
  border-top: none;
  }
  
  :hover {
    background-color: ${props => props.theme.lightMainColor};
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.lightColor};
  text-decoration: none;
  display: block;
  height: 100%;
  weight: 100%;
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
        <MenuContainer>
            <Header>
                <Logo>
                    <img src={logoImage}/>
                </Logo>
                <ExitButton onClick={props.hideMenu}> &times;</ExitButton>
            </Header>
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

        </MenuContainer>
    );
}

export default DesktopMenu;