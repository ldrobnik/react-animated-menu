import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

/* STYLES */

const MainLinks = styled.div`
  font-weight: bold;
  clear: left;
  padding-top: 0.8em;
  border-top: solid 1px ${props => props.theme.lightMainColor};
`;

const LinkContainer = styled.p`
  margin: 2px;
  
  :hover {
    background-color: ${props => props.theme.lightMainColor};
  }
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.lightColor};
  text-decoration: none;
  font-size: 1.1em;
  
  display: block;
  height: 100%;
  width: 100%;
  padding: 2px;
  
  ::selection {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.lightColor};
  }
`;

function DesktopMainLinks(props) {

    /* Links displayed in the main menu:
    *   name - name to be displayed
    *   route - route activated by clicking
    * */
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
    );
}

export default DesktopMainLinks;