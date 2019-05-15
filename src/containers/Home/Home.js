import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import styled, {createGlobalStyle} from 'styled-components';

import MobileMenu from '../../components/Menus/MobileMenu/MobileMenu';
import DesktopMenu from '../../components/Menus/DesktopMenu/DesktopMenu';

/* ANIMATIONS */

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

/* STYLES */

const GlobalStyle = createGlobalStyle`
    body {
        color: #FFF;
        background-color: #EE5F63;
        }
`;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
`;

const MenuButton = styled.button`
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 2px;
    background-color: #EE5F63;
    color: #FFF;
    border-style: solid;
    border-width: 2px;
    border-color: white;
    
    :hover {
        background-color: #F8B6B8;
    }
`;

function Home() {

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Specifies menu transition
    const [showMenu, setShowMenu] = useState(false);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
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
    const menu = isMobile ? <MobileMenu hideMenu={() => setShowMenu(false)}/> :
        <DesktopMenu hideMenu={() => setShowMenu(false)}/>;

    return (
        <React.Fragment>
            <GlobalStyle />
            <Wrapper>
                <MenuButton onClick={() => setShowMenu(true)}>Menu</MenuButton>
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
            </Wrapper>
        </React.Fragment>
    );

}

export default Home;
