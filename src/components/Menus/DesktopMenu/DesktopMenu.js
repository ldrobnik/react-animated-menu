import React from 'react';

function MobileMenu(props) {
    return (
        <React.Fragment>
            <div>Desktop Menu</div>
            <button onClick={props.hideMenu}>Close</button>
        </React.Fragment>
    );
}

export default MobileMenu;