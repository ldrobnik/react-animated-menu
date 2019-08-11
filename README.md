# Responsive, animated menu

A responsive, animated menu made with React as a recruitment assignment.

### Main objectives

- create fully responsive animated menu 
- should look good on mobile and desktop

### Desired objectives

- use **styled-components** for styling
- use **react-transition-group** to manage animations
- use **fontawesome**

## Project overview

My approach was to use different menus for mobile and desktop devices, displayed conditionally based on the current window width.

The project uses **styled-components** for styling and manages menu animations with  **react-transition-group**. It also employs **React Router DOM** but strictly for demonstration purposes (all routes point to the Home component).

Below, you will find a diagram showing the basic project structure, followed by diagrams presenting the components that make up the mobile and desktop menus (**MobileMenu.js** and **DesktopMenu.js**, respectively).

You can also take a look at a [live demo](react-animated-menu.netlify.com).

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

- Its primary purpose is to wrap the Home.js component in **ThemeProvider** and define colour variables used for **styled-components** styling.

- It also defines the single route used in the app.

### Home.js

- The heart of the project. A stateful component that contains all vital logic.

- Visually, its main purpose is to provide a button that activates the menu.

- It displays **different versions of the menu depending on the window width**.

- The current window width is monitored through an event listener managed using the **useEffect()** React hook.

- The state is managed using the **useState()** hook.

- The Desktop Menu is displayed with a **backdrop** while the Mobile Menu occupies the entire width of the screen.

- The component manages animation of the menu, backdrop and button using **CSSTransition**.

- User data to be displayed in the menu is provided in a JavaScript object.

### MobileMenu.js

- Contains all the components of the Mobile Menu and passes necessary props into them.

#### MobileHeader.js

- Contains the logo and a button to close the menu.

#### MobileUserData.js

- Displays user data: user’s first name, balance and image.

#### MobileLinks.js

- Contains all menu links which are in fact **router links** (however, as only one route is defined, they all point to the Home component).

- The **links are rendered dynamically based on an array of JavaScript objects** specifying the link name, route, **fontawesome** icon to be displayed as well as its rotation.

- The user profile ID is created from their first name and surname, which of course wouldn’t be a feasible solution in a real-life setting.

#### MobileHelpPanel.js

- Displays contact details to be used should the user need help.

### DesktopMenu.js

- Contains all the components of the Mobile Menu and passes necessary props into them.

#### DesktopHeader.js

- Just like in the Mobile Menu, it contains the logo and a button to close the menu.

#### DesktopSideMenu.js

- Contains two groups of secondary links displayed on the left-hand part of the menu.

#### SideTopLinks.js

- The “Home” and “Flights” links, which are **router links generated dynamically from an array of JavaScript objects**.

- The array specifies the name and route of each link.

#### SideBottomLinks.js

- The remaining secondary links, which are also **router links generated from an array of JavaScript objects**.

#### DesktopMainMenu.js

- The right-hand part of the menu containing user data and most important links.

#### DesktopUserData.js

- Displays user data: user’s full name, balance and image.

#### DesktopMainLinks.js

- A list of the most-important, user-specific links.

- Again, they are **router links generated from an array of JavaScript objects**.

#### DesktopHelpPanel.js

- Just like in the Mobile Menu, it displays contact details to be used should the user need help.

### Backdrop.js

- Displayed as a background of the Desktop Menu. When clicked, it closes the menu.

### constant.js

- A file containing constants with data used throughout the project.










