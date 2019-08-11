import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {mobileMenuLinks} from "../../../../assets/data/constants";

/* STYLES */

const LinkContainer = styled.p`
  margin: 0;
  border-top: solid 1px ${props => props.theme.lightMainColor};
  
  :hover {
    background-color: ${props => props.theme.lightMainColor};
  }
  
  :first-of-type {
    border-top: none;
  } 
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.lightColor};
  text-decoration: none;
  font-size: 1em;
  
  display: block;
  height: 100%;
  width: 100%;
  padding: 1em 0.5em;
    
  ::selection {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.lightColor};
  }
`;

function MobileLinks(props) {

    return (
        <React.Fragment>
            {mobileMenuLinks.map((link) => (
                <LinkContainer
                    key={link.name}
                    onClick={props.hideMenu}
                >
                    <MenuLink to={link.route}>
                        <MenuIcon icon={link.icon} transform={{rotate: link.rotation}}/>
                        {link.name}
                    </MenuLink>
                </LinkContainer>
            ))}
        </React.Fragment>
    );
}

export default MobileLinks;