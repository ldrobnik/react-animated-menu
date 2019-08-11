import React from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import {desktopBottomSideLinks} from "../../../../../assets/data/constants";

/* STYLES */

const linkAnimation = keyframes`
  0% {
    transform: translateX(0);
    letter-spacing: normal;
    opacity: 1;
  }
  30% {
    transform: translateX(10px);
    letter-spacing: 0.1em;
    opacity: 0.6;
  }
  100% {
    transform: translateX(0);
    letter-spacing: normal;
    opacity: 1;
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
  font-size: 1.4em;
  
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

    return (
        <BottomLinks>
            {desktopBottomSideLinks.map((link) => (
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