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

// Header styles
const Header = styled.div`
  position: relative;
  border-bottom: solid 1px ${props => props.theme.lightMainColor};
  padding: 0.5em;
`;

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

const Logo = styled.div`
    text-align: center;
    margin: 0.1em;
    
    img {
        user-select: none;
      }
`;

const ExitButton = styled.div`
  position: absolute;
  top: 0.2em;
  right: 0.5em;
  
  font-size: 1.2em;
    
  user-select: none;
  
  cursor: pointer;
    
  :hover {
    color: ${props => props.theme.lightMainColor}
  }
`;

// User data styles

const UserData = styled.div`
  width: 100%;
  text-align: center;
`;

const UserAvatar = styled.img`
  
  height: 2em;
  width: 2em;
  
  margin: 0 auto;
  padding: 0.5em;
  
  border-radius: 50%;
  background-color: ${props => props.theme.lightColor}
  
  user-select: none;
`;

const UserName = styled.p`

  ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
      }
`;

const UserBalanceInfo = styled.p`

::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
      }
`;

const UserBalanceValue = styled.p`

::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
      }
`;

// Link styles

const LinkContainer = styled.p`
  margin: 0;
  border-top: solid 1px ${props => props.theme.lightMainColor};
  
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
  width: 100%;
  padding: 8px 6px;
  
    ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
      }
`;

// Help panel styles
const HelpPanel = styled.div`
  text-align: center;
  
  p::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
      }
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

    // Path to the user image
    const userImagePath = '/' + props.image + '.png';

    return (
        <MenuContainer>
            <Header>
                <Logo>
                    <img src={logoImage} alt='Awaymo logo'/>
                </Logo>
                <ExitButton onClick={props.hideMenu}> &times;</ExitButton>
            </Header>
            <UserData>
                <UserAvatar src={userImagePath} alt='User profile photo'/>
                <UserName>{props.firstName}</UserName>
                <UserBalanceInfo>Available Balance</UserBalanceInfo>
                <UserBalanceValue>&pound;{props.balance}</UserBalanceValue>
            </UserData>
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
                <p>support@awaymo.com</p>
            </HelpPanel>
        </MenuContainer>
    );
}

export default DesktopMenu;