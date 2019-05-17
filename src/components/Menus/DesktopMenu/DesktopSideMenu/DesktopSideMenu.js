import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import SideTopLinks from './SideTopLinks/SideTopLinks';

/* STYLES */

const SideMenu = styled.div`
  width: 25%;
  display: table-cell;
  padding: 0.8em;
`;


const BottomLinks = styled.div`
  font-weight: bold;
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

function DesktopSideMenu(props) {

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

    return (
        <SideMenu>
            <SideTopLinks />
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
    );
}

export default DesktopSideMenu;