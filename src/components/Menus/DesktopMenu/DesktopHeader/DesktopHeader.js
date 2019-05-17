import React from "react";
import styled from 'styled-components';
import logoImage from '../../../../assets/images/awaymoFullWhite.svg';

/* STYLES */

const Header = styled.div`
  position: relative;
  border-bottom: solid 2px ${props => props.theme.lightColor};
  padding: 1em 0.5em;
`;

const Logo = styled.div`
    text-align: center;
    padding: 0.1em;
    
    img {
        user-select: none;
        width: 100px;
      }
`;


const ExitButton = styled.div`
  font-size: 1.2em;
  position: absolute;
  top: 0.8em;
  right: 0.5em;

  user-select: none;

  cursor: pointer;

  :hover {
    color: ${props => props.theme.lightMainColor}
  }
`;


function DesktopHeader(props) {
    return(
        <Header>
            <Logo>
                <img src={logoImage} alt='Awaymo logo'/>
            </Logo>
            <ExitButton onClick={props.hideMenu}> &times;</ExitButton>
        </Header>
    );
}

export default DesktopHeader;