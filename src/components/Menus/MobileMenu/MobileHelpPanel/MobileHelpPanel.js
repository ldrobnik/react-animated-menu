import React from 'react';
import styled from 'styled-components';
import {helpPanelData} from "../../../../assets/data/constants";

/* STYLES */
const HelpPanel = styled.div`
  text-align: center;
  border-top: solid 1px ${props => props.theme.lightMainColor};
  margin-top: 2.8em;
  margin-bottom: 1em;
  padding-top: 0.8em;
  
  p {
    font-size: 1em;
    margin: 0.1em;
  }
  
  p::selection, a::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
  }
`;

const EmailLink = styled.a`
    color: ${props => props.theme.lightColor};
    text-decoration: none;
    
    :hover {
      color: ${props => props.theme.veryLightMainColor};
    }
`;

function MobileHelpPanel() {

    //Link to be used in the email link
    const emailLink = 'mailto:' + helpPanelData.email;
    return (
        <HelpPanel>
            <p>{helpPanelData.message}</p>
            <p>{helpPanelData.phone}</p>
            <p><EmailLink href={emailLink}>{helpPanelData.email}</EmailLink></p>
        </HelpPanel>
    );
}

export default MobileHelpPanel;