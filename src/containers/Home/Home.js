import React, {useState, useEffect} from 'react';

import MobileMenu from '../../components/Menus/MobileMenu/MobileMenu';
import DesktopMenu from '../../components/Menus/DesktopMenu/DesktopMenu';

function Home() {

    // A state variable specifying the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // A state variable specifying whether the menu is visible
    const [menuVisible, setMenuVisible] = useState(false);

    // A function updating the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // A function updating the menu visibility
    const handleMenuVisibility = (bool) => {
      setMenuVisible(bool);
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

    // A constant specifying which menu (for mobile or desktop) should be displayed
    const menu = isMobile ? <MobileMenu /> : <DesktopMenu />;

    return menu;

}

export default Home;
