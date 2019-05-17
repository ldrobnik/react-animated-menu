import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import styled, {createGlobalStyle} from 'styled-components';

import MobileMenu from '../../components/Menus/MobileMenu/MobileMenu';
import DesktopMenu from '../../components/Menus/DesktopMenu/DesktopMenu';
import Backdrop from '../../components/Backdrop/Backdrop';

/* TRANSITIONS */

// Transition duration for showing/hiding the menu
const duration = 300;

// Default menu style
const defaultMenuStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
};

// Transition styles for the menu
const menuTransitionStyles = {
    entering: {
        opacity: 1,
        filter: 'blur(3px)'
    },
    entered: {
        opacity: 1
    },
    exiting: {
        opacity: 0,
        filter: 'blur(3px)'
    },
    exited: {
        opacity: 0,
        transform: 'translateY(-1000px)'
    }
};

// Default style for the button and backdrop
const defaultGeneralStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
};

// Transition styles for the button and backdrop
const generalTransitionStyles = {
    entering: {
        opacity: 1
    },
    entered: {
        opacity: 1
    },
    exiting: {
        opacity: 0
    },
    exited: {
        opacity: 0
    }
};

/* STYLES */

// Global style
const GlobalStyle = createGlobalStyle`
    body {
        color: ${props => props.theme.lightColor};
        background-color: ${props => props.theme.mainColor};
        font-family: 'Roboto', sans-serif;
        }
`;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const MenuButton = styled.button`
    
    font-size: 1.4em;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.lightColor};
    
    padding: 0.25em 0.5em;
    width: 6em;
    height: 3em;
    position: absolute;
    top: calc(50% - 3em);
    left: calc(50% - 3em);
    
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.veryLightMainColor};
    
    cursor: pointer;
    
    z-index: 0;
    
    :hover {
        background-color: ${props => props.theme.lightMainColor};
    }
    
     ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
        }
`;

function Home() {

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Specifies menu transition
    const [showMenu, setShowMenu] = useState(false);

    // Specifies menu button transition
    const [showButton, setShowButton] = useState(true);

    // Shows the menu and hides the button
    const handleMenuShow = () => {
      setShowMenu(true);
      setShowButton(false);
    };

    // Shows the menu and hides the button
    const handleMenuHide = () => {
        setShowMenu(false);
        setShowButton(true);
    };

    // Hides the menu and shows the button

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // Changes number format to add comma as thousands separator
    const formatNumber = num => {
        return num.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    };

    // Add an event listener to monitor the screen width and remove the listener when the component unmounts
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    // A constant specifying whether the app is displayed on a mobile device
    const isMobile = windowWidth <= 570;

    // Example user data
    const userData = {
        firstName: 'Dominik',
        surname: 'Biel',
        balance: 1500.00,
        image: 'avatar'
    };

    // Specifies whether and which menu (mobile or desktop) should be displayed
    const menu = isMobile ?
        <MobileMenu
            hideMenu={handleMenuHide}
            firstName={userData.firstName}
            balance={formatNumber(userData.balance)}
            image={userData.image}
        /> :
        <DesktopMenu
            hideMenu={handleMenuHide}
            firstName={userData.firstName}
            surname={userData.surname}
            balance={formatNumber(userData.balance)}
            image={userData.image}
        />;

    //Specifies whether backdrop should be shown
    const backdrop = showMenu && !isMobile ? <Backdrop hideMenu={handleMenuHide}/> : null;

    //Specifies whether menu button should be shown
    const menuButton = !showMenu ? <MenuButton onClick={handleMenuShow}>Menu</MenuButton> : null;

    return (
        <React.Fragment>
            <GlobalStyle/>
            <Wrapper>
                <CSSTransition
                    in={showMenu}
                    timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultMenuStyle,
                            ...menuTransitionStyles[state]
                        }}>
                            {menu}
                        </div>
                    )}
                </CSSTransition>
                <CSSTransition
                    in={showMenu}
                    timeout={duration}>
                    {state => (
                        <div style={{
                            ...defaultGeneralStyle,
                            ...generalTransitionStyles[state]
                        }}>
                            {backdrop}
                        </div>
                    )}
                </CSSTransition>
                <CSSTransition
                    in={showButton}
                    timeout={duration}>
                    {state => (
                    <div style={{
                        ...defaultGeneralStyle,
                        ...generalTransitionStyles[state]
                    }}>
                    {menuButton}
                    </div>
                    )}
                </CSSTransition>

            </Wrapper>
        </React.Fragment>
    );

}

export default Home;
