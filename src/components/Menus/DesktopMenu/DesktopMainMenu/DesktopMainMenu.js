import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

/* STYLES */

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

    // Path to the user image
    const userImagePath = '/' + props.image + '.png';

    // User full name
    const fullName = props.firstName + ' ' + props.surname;

    // Balance information
    const balanceInfo = props.balance + ' Available';

    return (
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
    );

}

export default DesktopMainMenu;