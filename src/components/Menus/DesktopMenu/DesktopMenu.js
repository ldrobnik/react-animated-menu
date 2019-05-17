import React from 'react';
import styled from 'styled-components';

import DesktopHeader from './DesktopHeader/DesktopHeader';
import DesktopSideMenu from './DesktopSideMenu/DesktopSideMenu';
import DesktopMainMenu from './DesktopMainMenu/DesktopMainMenu';

/* STYLES */

const MenuContainer = styled.div`
  max-width: 80%;
  max-height: 60%;
  margin-top: 15%;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  
  position: relative;
  
  z-index: 200;
  
  background-color: ${props => props.theme.mainColor};
  
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



// Help panel styles
const HelpPanel = styled.div`
  text-align: center;
  border-top: solid 1px ${props => props.theme.lightMainColor};
  padding: 0.8em 0;
  p {
    font-size: 0.8em;
    margin: 0.1em;
  }
  p::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
  }
  
`;

const EmailLink = styled.a`
    color: ${props => props.theme.lightColor};
    text-decoration: none;
`;

/* Menu link data:
*   name - name to be displayed
*   route - route activated by clicking
* */


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
            <HelpPanel>
                <p>We're here to help</p>
                <p>+44 (0) 20 8050 3459</p>
                <p><EmailLink href='mailto:support@awaymo.com'>support@awaymo.com</EmailLink></p>
            </HelpPanel>
        </MenuContainer>
    );
}

export default DesktopMenu;