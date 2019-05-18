import React from 'react';
import styled from 'styled-components';

import SideTopLinks from './SideTopLinks/SideTopLinks';
import SideBottomLinks from './SideBottomLinks/SideBottomLinks';

/* STYLES */

const SideMenu = styled.div`
  width: 28%;
  display: table-cell;
  padding: 0.8em;
`;

function DesktopSideMenu(props) {

    return (
        <SideMenu>
            <SideTopLinks hideMenu={props.hideMenu}/>
            <SideBottomLinks hideMenu={props.hideMenu}/>
        </SideMenu>
    );
}

export default DesktopSideMenu;