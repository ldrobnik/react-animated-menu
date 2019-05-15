import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUserCircle,
    faPlane,
    faCreditCard,
    faLifeRing,
    faPhone,
    faSignOutAlt,
    faQuestionCircle,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

/* Array containing menu data
*   name - name to be displayed
*   route - route activated by clicking
*   icon - name of fontawesome icon
*   rotation - degrees of rotation of the icon
* */
const menuLinks = [
    {
        name: 'Profile',
        route: '/profile/',
        icon: faUserCircle,
        rotation: 0
    },
    {
        name: 'My Bookings',
        route: '/bookings/',
        icon: faPlane,
        rotation: 315
    },
    {
        name: 'My Payments',
        route: '/payments/',
        icon: faCreditCard,
        rotation: 0
    },
    {
        name: 'Support',
        route: '/support/',
        icon: faLifeRing,
        rotation: 0
    },
    {
        name: 'Contact Us',
        route: '/contact/',
        icon: faPhone,
        rotation: 90
    },
    {
        name: 'Log Out',
        route: '/logout/',
        icon: faSignOutAlt,
        rotation: 0
    },
    {
        name: 'About',
        route: '/about/',
        icon: faQuestionCircle,
        rotation: 0
    },
    {
        name: 'FAQ',
        route: '/faq/',
        icon: faInfoCircle,
        rotation: 0
    }
];

function DesktopMenu(props) {
    return (
        <React.Fragment>
            <div>Mobile Menu</div>
            {menuLinks.map( link => (
             <p
                 key={link.name}
                 onClick={props.hideMenu}
             >
                 <FontAwesomeIcon icon={link.icon} transform={{rotate: link.rotation}}/>&nbsp;{link.name}
             </p>
            ))}
            <button onClick={props.hideMenu}>Close</button>
        </React.Fragment>
    );
}

export default DesktopMenu;