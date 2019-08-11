import React from 'react';
import styled from 'styled-components';

import DesktopUserData from './DesktopUserData/DesktopUserData';
import DesktopMainLinks from './DesktopMainLinks/DesktopMainLinks';

/* STYLES */

const MainMenu = styled.div`
  width: 44%;
  display: table-cell;
`;

function DesktopMainMenu(props) {

    return (
        <MainMenu>
            <DesktopUserData
                hideMenu={props.hideMenu}
            />
            <DesktopMainLinks
                hideMenu={props.hideMenu}
            />
        </MainMenu>
    );
}

export default DesktopMainMenu;