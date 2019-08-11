import {
    faCreditCard, faInfoCircle,
    faLifeRing,
    faPhone,
    faPlane, faQuestionCircle,
    faSignOutAlt,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";

// Changes number format by adding comma as thousands separator
const formatNumber = num => {
    return num.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

// Example user data to be displayed in the menu
export const userData = {
    firstName: 'Viktor',
    surname: 'Obrovsky',
    balance: formatNumber(2500.00),
    image: 'avatar'
};

/* DESKTOP MENU */
/* Links displayed in the main part of the Desktop menu:
    *   name - name to be displayed
    *   route - route activated by clicking
    * */
export const desktopMainLinks = [
    {
        name: 'Profile',
        route: '/profile/' + (userData.firstName + userData.surname).toLowerCase() + '/'
    },
    {
        name: 'My Bookings',
        route: '/bookings/'
    },
    {
        name: 'My Payments',
        route: '/payments/'
    },
    {
        name: 'Log Out',
        route: '/logout/'
    },
    {
        name: 'Resume Application',
        route: '/resume/'
    }
];

/* Links in the top side part of the Desktop Menu
    *   name - name to be displayed
    *   route - route activated by clicking
    * */
export const desktopTopSideLinks = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'Flights',
        route: '/flights/'
    },
];

/* Links in the bottom side part of the Desktop Menu
    *   name - name to be displayed
    *   route - route activated by clicking
    * */
export const desktopBottomSideLinks = [
    {
        name: 'About Us',
        route: '/about/'
    },
    {
        name: 'FAQ',
        route: '/faq/'
    },
    {
        name: 'Support',
        route: '/support/'
    },
    {
        name: 'Contact Us',
        route: '/contact/'
    }
];

/* MOBILE MENU */

/* Mobile menu link data:
  *   name - name to be displayed
  *   route - route activated by clicking
  *   icon - fontawesome icon to be used
  *   rotation - degrees of rotation of the icon
  */
export const mobileMenuLinks = [
    {
        name: 'Profile',
        route: '/profile/' + (userData.firstName + userData.surname).toLowerCase() + '/',
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

//Data to be used in the help panel

export const helpPanelData = {
    message: 'We’re here to help',
    phone: '+55 (0) 55 5050 5555',
    email: 'support@notanactualdomain.com'
}