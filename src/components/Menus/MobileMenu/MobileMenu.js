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

import MobileHeader from './MobileHeader/MobileHeader';
import MobileUserData from './MobileUserData/MobileUserData';

/* STYLES */

const MenuContainer = styled.div`
  
  max-width: 100%;
  max-height: 100%;
  padding: 0 0.5em;
  overflow: hidden;
  
  z-index: 200;
  
  background-color: ${props => props.theme.mainColor};
  
  ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
        }
`;


// Link styles

const LinkContainer = styled.p`
  margin: 0;

    border-top: solid 1px ${props => props.theme.lightMainColor};
  
  :hover {
    background-color: ${props => props.theme.lightMainColor};
  }
  
  :first-of-type {
    border-top: none;
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
  width: 100%;
  padding: 1em 0.5em;
  

  
  ::selection {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.lightColor};
  }
`;

// Help panel styles
const HelpPanel = styled.div`
  text-align: center;
  
  p {
    font-size: 0.8em;
    margin: 0.1em;
  }
  p::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
  }
`;

const EmailLink = styled.a`
    color: ${props => props.theme.lightColor};
    text-decoration: none;
`;

function MobileMenu(props) {

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
            <MobileHeader
                hideMenu={props.hideMenu}
            />
            <MobileUserData
                hideMenu={props.hideMenu}
                firstName={props.firstName}
                balance={props.balance}
                image={props.image}
            />
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
            <HelpPanel>
                <p>We're here to help</p>
                <p>+44 (0) 20 8050 3459</p>
                <p><EmailLink href='mailto:support@awaymo.com'>support@awaymo.com</EmailLink></p>
            </HelpPanel>
        </MenuContainer>
    );
}

export default MobileMenu;