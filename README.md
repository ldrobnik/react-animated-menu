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

## Project structure

My approach was to use different menus for mobile and desktop devices, displayed conditionally based on the current window width.

Below, you will find a diagram showing the basic project structure, followed by diagrams presenting the components that make up the mobile and desktop menus (MobileMenu.js and DesktopMenu.js, respectively).

You can also take a look at a [live demo](https://react-awaymo-test.netlify.com/).

### Basic structure

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

### Home.js

The heart of the project. A stateful component that contains all vital logic.

### MobileMenu.js

#### MobileHeader.js

#### MobileUserData.js

#### MobileLinks.js

#### MobileHelpPanel.js

### DesktopMenu.js

#### DesktopHeader.js

#### DesktopSideMenu.js

#### SideTopLinks.js

#### SideBottomLinks.js

#### DesktopMainMenu.js

#### DesktopUserData.js

#### DesktopMainLinks.js

#### DesktopHelpPanel.js










