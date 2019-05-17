import React from 'react';
import styled from 'styled-components';

import MobileHeader from './MobileHeader/MobileHeader';
import MobileUserData from './MobileUserData/MobileUserData';
import MobileLinks from './MobileLinks/MobileLinks';

/* STYLES */

const MenuContainer = styled.div`
  
  max-width: 100%;
  max-height: 100%;
  padding: 0 0.5em;
  overflow: hidden;
  
  z-index: 200;
  
  background-color: ${props => props.theme.mainColor};
  
  ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
        }
`;

// Help panel styles
const HelpPanel = styled.div`
  text-align: center;
  
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

function MobileMenu(props) {


    return (
        <MenuContainer>
            <MobileHeader
                hideMenu={props.hideMenu}
            />
            <MobileUserData
                hideMenu={props.hideMenu}
                firstName={props.firstName}
                balance={props.balance}
                image={props.image}
            />
            <MobileLinks
                hideMenu={props.hideMenu}
                firstName={props.firstName}
                surname={props.surname}
            />
            <HelpPanel>
                <p>We're here to help</p>
                <p>+44 (0) 20 8050 3459</p>
                <p><EmailLink href='mailto:support@awaymo.com'>support@awaymo.com</EmailLink></p>
            </HelpPanel>
        </MenuContainer>
    );
}

export default MobileMenu;