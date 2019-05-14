import React, {useState, useEffect} from 'react';

function Home() {

    // A state variable specifying the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //A function updating the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    //Add an event listener to monitor the screen width
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    });

    return(
        <div>{windowWidth}</div>
    );
}

export default Home;
