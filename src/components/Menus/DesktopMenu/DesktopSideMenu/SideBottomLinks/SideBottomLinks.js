import React from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

/* STYLES */

const linkAnimation = keyframes`
  0% {
    transform: translateX(0);
    font-size: 1.1em;
  }
  30% {
    transform: translateX(10px);
    font-size: 1.4em;
  }
  100% {
    transform: translateX(0);
    font-size: 1.1em;
  }
`;

const BottomLinks = styled.div`
  font-weight: bold; 
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

function SideBottomLinks(props) {

    /* Links in the bottom part of the side menu
    *   name - name to be displayed
    *   route - route activated by clicking
    * */
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

    return (
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
    );
}

export default SideBottomLinks;