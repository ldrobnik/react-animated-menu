import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

/* STYLES */

const TopLinks = styled.div`
  font-weight: bold;
  margin-bottom: 0.8em;
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

function SideTopLinks(props) {

    /* Links in the top part of the side menu
    *   name - name to be displayed
    *   route - route activated by clicking
    * */
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

    return(
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
    );
}

export default SideTopLinks;