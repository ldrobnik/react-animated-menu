import React from 'react';
import styled from 'styled-components';

import DesktopHeader from './DesktopHeader/DesktopHeader';
import DesktopSideMenu from './DesktopSideMenu/DesktopSideMenu';
import DesktopMainMenu from './DesktopMainMenu/DesktopMainMenu';
import DesktopHelpPanel from './DesktopHelpPanel/DesktopHelpPanel';

/* STYLES */

const MenuContainer = styled.div`
  max-width: 60%;
  max-height: 60%;
  margin-top: 15%;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  
  position: relative;
  
  z-index: 200;
  
  background-color: ${props => props.theme.mainColor};
  
  @media (max-width: 1000px) {
    max-width: 80%;
  }
  
  ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
        }
`;

// Styles for container holding side and main menus
const MenuContent = styled.div`
  display: table;
  width: 100%;
  padding-bottom: 4.5em;
`;

// Styles for empty margin on the right
const Margin = styled.div`
  width: 25%;
  display: table-cell;
`;


function DesktopMenu(props) {


    return (
        <MenuContainer>
            <DesktopHeader hideMenu={props.hideMenu}/>
            <MenuContent>
                <DesktopSideMenu hideMenu={props.hideMenu}/>
                <DesktopMainMenu
                    firstName={props.firstName}
                    surname={props.surname}
                    balance={props.balance}
                    image={props.image}
                    hideMenu={props.hideMenu}
                />
                <Margin/>
            </MenuContent>
            <DesktopHelpPanel />
        </MenuContainer>
    );
}

export default DesktopMenu;