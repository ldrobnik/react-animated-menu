import React from 'react';
import styled from 'styled-components';

/* STYLES */
const HelpPanel = styled.div`
  text-align: center;
  margin-top: 2em;
  
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

function MobileHelpPanel() {
    return(
        <HelpPanel>
            <p>We're here to help</p>
            <p>+44 (0) 20 8050 3459</p>
            <p><EmailLink href='mailto:support@awaymo.com'>support@awaymo.com</EmailLink></p>
        </HelpPanel>
    );
}

export default MobileHelpPanel;