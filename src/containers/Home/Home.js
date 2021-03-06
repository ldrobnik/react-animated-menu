import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import styled, {createGlobalStyle} from 'styled-components';

import MobileMenu from '../../components/Menus/MobileMenu/MobileMenu';
import DesktopMenu from '../../components/Menus/DesktopMenu/DesktopMenu';
import Backdrop from '../../components/Backdrop/Backdrop';

/* TRANSITIONS */

// Transition duration for all animations
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
        filter: 'blur(3px)',
        transform: 'skew(5deg, 10deg)'
    },
    entered: {
        opacity: 1,
        height: '100%'
    },
    exiting: {
        opacity: 0,
        filter: 'blur(3px)',
        height: '50%',
        transform: 'skew(10deg, 5deg)'
    },
    exited: {
        opacity: 0,
        height: '100%'
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
        overflow-x: hidden;
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

const Notice = styled.div`
  text-align: center;
  color: ${props => props.theme.lightMainColor};
  font-size: 0.6em;
  
   ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
    }
  
  a {
    color: ${props => props.theme.lightMainColor};
    text-decoration: none;
    
     ::selection {
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.lightColor};
    }
    
    &:hover {
      color: ${props => props.theme.veryLightMainColor};
    }
  }
  
`;

function Home() {

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Specifies menu and backdrop transition
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
        window.scrollTo(0, 0); // scrolls back to top - for nicer experience on mobile devices
    };

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // Changes number format by adding comma as thousands separator
    const formatNumber = num => {
        return num.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    };

    // Adds an event listener to monitor the screen width and remove the listener when the component unmounts
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    //Specifies breakpoint for mobile devices
    const mobileBreakpoint = 768;

    // Specifies whether the app is displayed on a mobile device
    const isMobile = windowWidth <= mobileBreakpoint;

    // Example user data to be displayed in the menu
    const userData = {
        firstName: 'Viktor',
        surname: 'Obrovsky',
        balance: 1500.00,
        image: 'avatar'
    };

    // Specifies whether and which menu (mobile or desktop) should be displayed
    const menu = isMobile ?
        <MobileMenu
            hideMenu={handleMenuHide}
        /> :
        <DesktopMenu
            hideMenu={handleMenuHide}
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
                            <Notice>Avatar icon made by <a href="https://www.flaticon.com/authors/eucalyp"
                                                  title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/"
                                                                                      title="Flaticon">www.flaticon.com</a> is
                                licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
                                               title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></Notice>
                        </div>
                    )}
                </CSSTransition>
            </Wrapper>
        </React.Fragment>
    );
}

export default Home;
