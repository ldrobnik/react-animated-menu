import React from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

/* STYLES */

const linkAnimation = keyframes`
  0% {
    transform: translateX(0);
    letter-spacing: normal;
  }
  30% {
    transform: translateX(10px);
    letter-spacing: 0.3em;
  }
  100% {
    transform: translateX(0);
    letter-spacing: normal;
  }
`;

const TopLinks = styled.div`
  font-weight: bold;
  margin-bottom: 0.8em;
`;

const LinkContainer = styled.p`
  margin: 2px;
  height: 1.7em;
  overflow: hidden;
  
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
  
  :hover {
    animation: 1s ${linkAnimation} ease;
  }
  
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

    return (
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