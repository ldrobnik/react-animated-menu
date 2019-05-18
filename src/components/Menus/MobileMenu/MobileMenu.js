import React from 'react';
import styled from 'styled-components';

import MobileHeader from './MobileHeader/MobileHeader';
import MobileUserData from './MobileUserData/MobileUserData';
import MobileLinks from './MobileLinks/MobileLinks';
import MobileHelpPanel from './MobileHelpPanel/MobileHelpPanel';

/* STYLES */

const MenuContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  padding: 0 0.5em;
  overflow: hidden;
  
  z-index: 200;
  
  background-color: ${props => props.theme.mainColor};
  
  ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
        }
`;

function MobileMenu(props) {

    return (
        <MenuContainer>
            <MobileHeader
                hideMenu={props.hideMenu}
            />
            <MobileUserData
                hideMenu={props.hideMenu}
                firstName={props.firstName}
                balance={props.balance}
                image={props.image}
            />
            <MobileLinks
                hideMenu={props.hideMenu}
                firstName={props.firstName}
                surname={props.surname}
            />
            <MobileHelpPanel />
        </MenuContainer>
    );
}

export default MobileMenu;