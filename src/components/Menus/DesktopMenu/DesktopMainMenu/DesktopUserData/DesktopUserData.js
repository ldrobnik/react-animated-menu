import React from "react";
import styled from "styled-components";

/* STYLES */
const UserData = styled.div`
  width: 100%;
  text-align: left;
  font-weight: bold;
  font-size: 0.9em;
`;

const UserAvatar = styled.img`
  
  height: 2em;
  width: 2em;
  
  margin-right: 1em;
  padding: 0.5em;
  
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.theme.mainColor};
  box-shadow: 0 0 0 3px ${props => props.theme.lightColor};
  
  background-color: ${props => props.theme.lightColor}
  
  float: left;
  
  user-select: none;
`;

const UserDetails = styled.div`
    padding-top: 0.3em;
    padding-bottom: 1.2em;
    p {
    margin: 0;
    }
    
    p::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
  }
`;

function DesktopUserData(props) {
    // Path to the user image
    const userImagePath = '/' + props.image + '.png';

    // User full name
    const fullName = props.firstName + ' ' + props.surname;

    // Balance information
    const balanceInfo = props.balance + ' Available';

    return(
        <UserData>
            <UserAvatar src={userImagePath} alt='User profile photo'/>
            <UserDetails>
                <p>{fullName}</p>
                <p>&pound;{balanceInfo}</p>
            </UserDetails>
        </UserData>
    );
}

export default DesktopUserData;