import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';

import MobileMenu from '../../components/Menus/MobileMenu/MobileMenu';
import DesktopMenu from '../../components/Menus/DesktopMenu/DesktopMenu';

// React-transition-group-related code

// Transition duration
const duration = 300;

// Default style
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
};

// Definition of behaviour
const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0}
};

function Home(props) {

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Specifies whether the menu is visible
    const [menuVisible, setMenuVisible] = useState(false);

    // Specifies menu transition
    const [showMenu, setShowMenu] = useState(false);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // Hides the menu
    const handleMenuHiding = () => {
        setMenuVisible(false);
    };

    // Add an event listener to monitor the screen width and remove the listener when the component unmounts
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    // A constant specifying whether the app is displayed on a mobile device
    const isMobile = windowWidth <= 500;

    // A constant specifying whether and which menu (mobile or desktop) should be displayed
    const menu = menuVisible ? (isMobile ? <MobileMenu hideMenu={handleMenuHiding}/> : <DesktopMenu hideMenu={handleMenuHiding}/>) : null;

    return (
        <React.Fragment>
            <button onClick={() => setShowMenu(true)}>Menu</button>
            <CSSTransition
                in={showMenu}
                timeout={duration}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        {menu}
                    </div>

                )}

            </CSSTransition>
        </React.Fragment>
    );

}

export default Home;
