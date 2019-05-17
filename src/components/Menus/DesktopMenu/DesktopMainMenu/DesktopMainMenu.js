import React from 'react';
import styled from 'styled-components';

import DesktopUserData from './DesktopUserData/DesktopUserData';
import DesktopMainLinks from './DesktopMainLinks/DesktopMainLinks';

/* STYLES */

const MainMenu = styled.div`
  width: 50%;
  display: table-cell;
  padding: 0.8em;
`;

function DesktopMainMenu(props) {

    return (
        <MainMenu>
            <DesktopUserData
                firstName={props.firstName}
                surname={props.surname}
                balance={props.balance}
                image={props.image}
                hideMenu={props.hideMenu}
            />
            <DesktopMainLinks
                firstName={props.firstName}
                surname={props.surname}
                hideMenu={props.hideMenu}
            />
        </MainMenu>
    );

}

export default DesktopMainMenu;