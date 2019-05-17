import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import DesktopUserData from './DesktopUserData/DesktopUserData';

/* STYLES */
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
  :hover {
    background-color: ${props => props.theme.lightMainColor};
  }
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.lightColor};
  text-decoration: none;
  padding: 2px;
`;


// Main menu styles
const MainMenu = styled.div`
  width: 50%;
  display: table-cell;
  padding: 0.8em;
`;

function DesktopMainMenu(props) {
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
        <MainMenu>
            <DesktopUserData
                firstName={props.firstName}
                surname={props.surname}
                balance={props.balance}
                image={props.image}
                hideMenu={props.hideMenu}
            />
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
    );

}

export default DesktopMainMenu;