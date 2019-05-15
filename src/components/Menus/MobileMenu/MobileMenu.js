import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faPlane,
    faCreditCard,
    faLifeRing,
    faPhone,
    faSignOutAlt,
    faQuestionCircle,
    faInfoCircle} from '@fortawesome/free-solid-svg-icons';

function DesktopMenu(props) {
    return (
        <React.Fragment>
            <div>Mobile Menu</div>
            <FontAwesomeIcon icon={faInfoCircle} transform={{ rotate: 0 }} />
            <button onClick={props.hideMenu}>Close</button>
        </React.Fragment>
    );
}

export default DesktopMenu;