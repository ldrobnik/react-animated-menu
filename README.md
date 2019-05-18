# React technical test for Awaymo

Test completed by Łukasz Drobnik

## Test objectives

The object of the test was to create an animated menu.

### Main objectives

- create fully responsive animated menu 
- should look good on mobile and desktop

### Desired objectives

- use **styled-components** for styling
- use **react-transition-group** to manage animations
- use **fontawesome**

### Screen designs
![mobile](<https://raw.githubusercontent.com/Awaymo/react-technical-test/master/design/mobile.png>)

![desktop](<https://raw.githubusercontent.com/Awaymo/react-technical-test/master/design/desktop.png>)

## Project overview

My approach was to use different menus for mobile and desktop devices, displayed conditionally based on the current window width.

The project uses **styled-components** for styling and manages menu animations with  **react-transition-group**. It also employs **React-Router-Dom** but strictly for demonstration purposes (all routes point to the Home component).

Below, you will find a diagram showing the basic project structure, followed by diagrams presenting the components that make up the mobile and desktop menus (**MobileMenu.js** and **DesktopMenu.js**, respectively).

You can also take a look at a [live demo](https://react-awaymo-test.netlify.com/).

### Basic project structure

        +---------+
        |  App.js |
        +----+----+
             |
             |
        +----+----+
        | Home.js |
        +-+--+--+-+
          |  |  |
          |  |  | +---------------+
          |  |  +-+ MobileMenu.js |
          |  |    +---------------+
          |  |
          |  |    +----------------+
          |  +----+ DesktopMenu.js |
          |       +----------------+
          |
          |       +------------+
          +-------+ Backdrop.js|
                  +------------+

### Mobile Menu structure

     +---------------+
     | MobileMenu.js |
     +---------------+
      | | | |
      | | | |   +-----------------+
      | | | +---+ MobileHeader.js |
      | | |     +-----------------+
      | | |
      | | |     +-------------------+
      | | +-----+ MobileUserData.js |
      | |       +-------------------+
      | |
      | |       +----------------+
      | +-------+ MobileLinks.js |
      |         +----------------+
      |
      |         +--------------------+
      +---------+ MobileHelpPanel.js |
                +--------------------+

### Desktop Menu structure


       +----------------+
       | DesktopMenu.js |
       +----------------+
           | | | |
           | | | | +------------------+
           | | | +-+ DesktopHeader.js |
           | | |   +------------------+
           | | |
           | | |   +--------------------+
           | | +---+ DesktopSideMenu.js |
           | |     +--------------------+
           | |      | |
           | |      | | +-----------------+
           | |      | +-+ SideTopLinks.js |
           | |      |   +-----------------+
           | |      |
           | |      |   +--------------------+
           | |      +---+ SideBottomLinks.js |
           | |          +--------------------+
           | |
           | |     +--------------------+
           | +-----+ DesktopMainMenu.js |
           |       +--------------------+
           |        | |
           |        | | +--------------------+
           |        | +-+ DesktopUserData.js |
           |        |   +--------------------+
           |        |
           |        |   +---------------------+
           |        +---+ DesktopMainLinks.js |
           |            +---------------------+
           |
           |       +---------------------+
           +-------+ DesktopHelpPanel.js |
                   +---------------------+

### App.js

- Its main purpose is to wrap the Home.js component in **ThemeProvider** and define colour variables used throughout the app.

- It also defines the single route used in the app.

### Home.js

- The heart of the project. A stateful component that contains all vital logic.

- Visually, its main purpose is to provide a button that activates the menu.

- It displays **different versions of the menu depending on the window width**.

- The current window width is monitored through an event listener managed using the **useEffect()** React hook.

- The Desktop Menu is displayed with a **backdrop** while the Mobile Menu occupies the entire width of the screen.

- The component manages the animation of the menu, backdrop and button activating the menu using **CSSTransition**.

- The state is managed using the **useState()** hook.

- User data to be displayed in the menu are provided in a constant.

### MobileMenu.js

#### MobileHeader.js

#### MobileUserData.js

#### MobileLinks.js

#### MobileHelpPanel.js

### Backdrop.js

- Displayed as a background of the Desktop Menu. Clicking it closes the menu.

### DesktopMenu.js

#### DesktopHeader.js

#### DesktopSideMenu.js

#### SideTopLinks.js

#### SideBottomLinks.js

#### DesktopMainMenu.js

#### DesktopUserData.js

#### DesktopMainLinks.js

#### DesktopHelpPanel.js










