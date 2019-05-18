import React from 'react';
import styled from 'styled-components';
import logoImage from '../../../../assets/images/awaymoFullWhite.svg';

const Header = styled.div`
  position: relative;
  border-bottom: solid 1px ${props => props.theme.lightMainColor};
  padding: 1em 0.5em;
`;

const Logo = styled.div`
    text-align: center;
    
    img {
        user-select: none;
        width: 110px;
      }
`;

const ExitButton = styled.div`
  position: absolute;
  top: 0.8em;
  right: 0.8em;
  
  font-size: 1.2em;
    
  user-select: none;
  cursor: pointer;
    
  :hover {
    color: ${props => props.theme.veryLightMainColor}
  }
`;

function MobileHeader(props) {
    return (
        <Header>
            <Logo>
                <img src={logoImage} alt='Awaymo logo'/>
            </Logo>
            <ExitButton onClick={props.hideMenu}> &times;</ExitButton>
        </Header>
    );
}

export default MobileHeader;