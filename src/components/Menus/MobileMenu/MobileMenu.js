import React from 'react';

function DesktopMenu(props) {
    return (
        <React.Fragment>
            <div>Mobile Menu</div>
            <button onClick={props.hideMenu}>Close</button>
        </React.Fragment>
    );
}

export default DesktopMenu;