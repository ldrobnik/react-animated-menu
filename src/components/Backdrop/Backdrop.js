import React from 'react';
import styled from 'styled-components';

/* STYLES */

const BackdropBody = styled.div`
    background-color: ${props => props.darkColor};
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    z-index: 100;
`;

function Backdrop(props) {
    return <BackdropBody onClick={props.hideMenu} />;
}

export default Backdrop;