import React from 'react';
import {Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Home from './containers/Home/Home';

// Theme to be used in the project
const theme = {
    mainColor: '#EE5F63',
    lightMainColor: '#F38D90',
    veryLightMainColor: '#F8BBBD',
    lightColor: '#FFFFFF',
    darkColor: '#000000'
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Route path='/' component={Home}/>
        </ThemeProvider>
    );
}

export default App;
