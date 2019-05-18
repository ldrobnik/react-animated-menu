import React from 'react';
import styled from 'styled-components';

/* STYLES */
const UserData = styled.div`
  width: 100%;
  text-align: center;
  padding: 1.6em 0;
`;

const UserAvatar = styled.img`
  height: 2em;
  width: 2em;
  margin: 0 auto;
  padding: 0.3em;
  
  border-radius: 50%;
  background-color: ${props => props.theme.lightColor}
  
  user-select: none;
`;

const UserName = styled.p`
  font-size: 1.2em;
  margin: 0;
  
  ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
      }
`;

const UserBalanceInfo = styled.p`
   font-size: 0.8em;
   margin: 0.1em;
   
   ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
      }
`;

const UserBalanceValue = styled.p`
  font-size: 1em;
  margin: 0;
  ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
      }
`;

function MobileUserData(props) {

    // Path to the user image
    const userImagePath = '/' + props.image + '.png';

    return (
        <UserData>
            <UserAvatar src={userImagePath} alt='User profile photo'/>
            <UserName>{props.firstName}</UserName>
            <UserBalanceInfo>Available Balance</UserBalanceInfo>
            <UserBalanceValue>&pound;{props.balance}</UserBalanceValue>
        </UserData>
    );
}

export default MobileUserData;