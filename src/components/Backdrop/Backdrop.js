import React from 'react';
import styled from 'styled-components';

/* STYLES */

const BackdropBody = styled.div`
    background-color: ${props => props.theme.darkColor};
    opacity: 0.5;
    
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    
    z-index: 100;
`;


function Backdrop(props) {
    return <BackdropBody onClick={props.hideMenu} />;
}

export default Backdrop;