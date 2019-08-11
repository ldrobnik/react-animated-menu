import {
    faCreditCard, faInfoCircle,
    faLifeRing,
    faPhone,
    faPlane, faQuestionCircle,
    faSignOutAlt,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";

/* Menu link data:
  *   name - name to be displayed
  *   route - route activated by clicking
  *   icon - fontawesome icon to be used
  *   rotation - degrees of rotation of the icon
  */
export const mobileMenuLinks = [
    {
        name: 'Profile',
        route: '/profile/' + (props.firstName + props.surname).toLowerCase() + '/',
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