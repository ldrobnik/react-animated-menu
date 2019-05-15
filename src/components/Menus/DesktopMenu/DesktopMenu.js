import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function MobileMenu(props) {
    return (
        <React.Fragment>
            <div>Desktop Menu</div>
            <button onClick={props.hideMenu}>Close</button>
        </React.Fragment>
    );
}

export default MobileMenu;