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

const Logo = styled.div`
    text-align: center;
    margin: 0.1em;
`;

const SideMenu = styled.div``;

const TopLinks = styled.div``;

const BottomLinks = styled.div``;

const MainMenu = styled.div``;

const LinkContainer = styled.p`
  margin: 2px;
  padding: 2px;
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.lightColor};
  text-decoration: none;
`;

/* Menu link data:
*   name - name to be displayed
*   route - route activated by clicking
* */


function MobileMenu(props) {

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

    return (
        <MenuContainer>
            <Header>
                <Logo>
                    <img src={logoImage}/>
                </Logo>
                <ExitButton onClick={props.hideMenu}> &times;</ExitButton>
            </Header>
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
            </MainMenu>
            <button onClick={props.hideMenu}>Close</button>
        </MenuContainer>
    );
}

export default MobileMenu;