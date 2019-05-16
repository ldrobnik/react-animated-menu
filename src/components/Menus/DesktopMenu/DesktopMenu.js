import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

/* STYLES */

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
        <React.Fragment>
            <div>Desktop Menu</div>
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
        </React.Fragment>
    );
}

export default MobileMenu;