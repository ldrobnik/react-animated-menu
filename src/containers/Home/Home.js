import React, {useState, useEffect} from 'react';

import MobileMenu from '../../components/Menus/MobileMenu/MobileMenu';
import DesktopMenu from '../../components/Menus/DesktopMenu/DesktopMenu';

function Home(props) {

    // A state variable specifying the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // A state variable specifying whether the menu is visible
    const [menuVisible, setMenuVisible] = useState(false);

    // A function updating the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // A function showing the menu
    const showMenu = () => {
        setMenuVisible(true);
    };

    // A function hiding the menu
    const hideMenu = () => {
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
    const menu = menuVisible ? (isMobile ? <MobileMenu hideMenu={hideMenu}/> : <DesktopMenu hideMenu={hideMenu}/>) : null;

    return (
        <React.Fragment>
            <button onClick={showMenu}>Menu</button>
            {menu}
        </React.Fragment>
    );

}

export default Home;
