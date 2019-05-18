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











