import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
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

// Header styles
const Header = styled.div`
  position: relative;
  border-bottom: solid 2px ${props => props.theme.lightColor};
  padding: 1em 0.5em;
`;

const Logo = styled.div`
    text-align: center;
    padding: 0.1em;
    
    img {
        user-select: none;
        width: 100px;
      }
    
`;

const ExitButton = styled.div`
  font-size: 1.2em;
  position: absolute;
  top: 0.8em;
  right: 0.5em;

  user-select: none;

  cursor: pointer;

  :hover {
    color: ${props => props.theme.lightMainColor}
  }
`;

// Styles for container holding SideMenu and MainMenu

// Styles for container holding side and main menus
const MenuContent = styled.div`
  display: table;
  width: 100%;
`;

// Side menu styles
const SideMenu = styled.div`
  width: 25%;
  display: table-cell;
  padding: 0.8em;
`;

// Main menu styles
const MainMenu = styled.div`
  width: 50%;
  display: table-cell;
  padding: 0.8em;
`;

// Styles for empty margin on the right
const Margin = styled.div`
  width: 25%;
  display: table-cell;
`;


const TopLinks = styled.div`
  font-weight: bold;
  margin-bottom: 0.8em;
`;

const BottomLinks = styled.div`
  font-weight: bold;
`;

// User data styles

const UserData = styled.div`
  width: 100%;
  text-align: left;
  font-weight: bold;
  font-size: 0.9em;
`;

const UserAvatar = styled.img`
  
  height: 2em;
  width: 2em;
  
  margin-right: 1em;
  padding: 0.5em;
  
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.theme.mainColor};
  box-shadow: 0 0 0 3px ${props => props.theme.lightColor};
  
  background-color: ${props => props.theme.lightColor}
  
  float: left;
`;

const UserDetails = styled.div`
    padding-top: 0.3em;
    padding-bottom: 1.2em;
    p {
    margin: 0;
    }
`;

// Styles for container of main menu links

const MainLinks = styled.div`
  font-weight: bold;
  clear: left;
  padding-top: 0.8em;
  border-top: solid 1px ${props => props.theme.lightMainColor};
`;

// Link styles
const LinkContainer = styled.p`
  margin: 2px;
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.lightColor};
  text-decoration: none;
  padding: 2px;
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

/* Menu link data:
*   name - name to be displayed
*   route - route activated by clicking
* */


function DesktopMenu(props) {

    // Links displayed on top of side menu
    const topSideLinks = [
        {
            name: 'Home',
            route: '/'
        },
        {
            name: 'Flights',
            route: '/flights/'
        },
    ];

// Remaining links of the side menu
    const bottomSideLinks = [
        {
            name: 'About Us',
            route: '/about/'
        },
        {
            name: 'FAQ',
            route: '/faq/'
        },
        {
            name: 'Support',
            route: '/support/'
        },
        {
            name: 'Contact Us',
            route: '/contact/'
        }
    ];


// Links displayed in the main menu
    const mainLinks = [
        {
            name: 'Profile',
            route: '/profile/' + (props.firstName + props.surname).toLowerCase() + '/'
        },
        {
            name: 'My Bookings',
            route: '/bookings/'
        },
        {
            name: 'My Payments',
            route: '/payments/'
        },
        {
            name: 'Log Out',
            route: '/logout/'
        },
        {
            name: 'Resume Application',
            route: '/resume/'
        }
    ];

    // Path to the user image
    const userImagePath = '/' + props.image + '.png';

    // User full name
    const fullName = props.firstName + ' ' + props.surname;

    // Balance information
    const balanceInfo = props.balance + ' Available';
    return (
        <MenuContainer>
            <Header>
                <Logo>
                    <img src={logoImage} alt='Awaymo logo'/>
                </Logo>
                <ExitButton onClick={props.hideMenu}> &times;</ExitButton>
            </Header>
            <MenuContent>
                <SideMenu>
                    <TopLinks>
                        {topSideLinks.map((link) => (
                            <LinkContainer
                                key={link.name}
                                onClick={props.hideMenu}
                            >
                                <MenuLink to={link.route}>
                                    {link.name}
                                </MenuLink>
                            </LinkContainer>
                        ))}
                    </TopLinks>
                    <BottomLinks>
                        {bottomSideLinks.map((link) => (
                            <LinkContainer
                                key={link.name}
                                onClick={props.hideMenu}
                            >
                                <MenuLink to={link.route}>
                                    {link.name}
                                </MenuLink>
                            </LinkContainer>
                        ))}
                    </BottomLinks>
                </SideMenu>
                <MainMenu>
                    <UserData>
                        <UserAvatar src={userImagePath} alt='User profile photo'/>
                        <UserDetails>
                            <p>{fullName}</p>
                            <p>&pound;{balanceInfo}</p>
                        </UserDetails>
                    </UserData>
                    <MainLinks>
                        {mainLinks.map((link) => (
                            <LinkContainer
                                key={link.name}
                                onClick={props.hideMenu}
                            >
                                <MenuLink to={link.route}>
                                    {link.name}
                                </MenuLink>
                            </LinkContainer>
                        ))}
                    </MainLinks>
                </MainMenu>
                <Margin/>
            </MenuContent>
            <HelpPanel>
                <p>We're here to help</p>
                <p>+44 (0) 20 8050 3459</p>
                <p><EmailLink href='mailto:support@awaymo.com'>support@awaymo.com</EmailLink></p>
            </HelpPanel>
        </MenuContainer>
    );
}

export default DesktopMenu;