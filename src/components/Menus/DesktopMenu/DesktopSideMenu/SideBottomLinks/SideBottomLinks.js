import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

/* STYLES */

// Link styles

const BottomLinks = styled.div`
  font-weight: bold; 
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
  padding: 2px;
  
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
    return(
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