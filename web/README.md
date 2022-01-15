# DEV React-Apollo Starter

### Getting Started

To start your project built off of this repository, click the **Fork** button in the top right of the github GUI. This will create a copy of this repository under your account. Share this repository with your team members so that everyone may work off of it.

### Running the project

```bash
$ npm i
$ npm run dev
```

## Project Layout

### Project Structure

This repository contains by the general frontend web file structure conventions we use at DEV. It has react-router, apollo integration, and styled-components. It also has a full developer environment with prettier, eslint, and travis set up. The repository was designed first and foremost to scale to large projects. It should be easy to extend the base file structure and setup here to much larger projects.

```
project-repo-name
|
└───node_modules
|
└───public
│
└───src
│   │   App.js
|   |   client.js
│   │   config.js
|   |   index.js
|   |   theme.js
│   │
│   └───assets
│   |
│   └───components
│   |   └───LineInput
|   |   |   └─── index.js
|   |   |   └─── styles.js
|   |   |   └─── graphql.js
|   |   |   └─── story.js
│   |   └───NavBar
│   |   └───PageHeader
│   |   └───SubmitButton
│   |   └───TextArea
│   │
│   └───containers
│       └───About
│       └───ContactUs
│       └───Home
│
|   .eslintrc.json
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
```

### Important Directories and Files

- **public**

  - Used to store the root html and css files, favicon, etc.
    **Note:** You cannot import assets from this directory as it is outside of src

- **src**

  - The main directory. Used to store all javascript files

- **App.js**

  - The root component. Any resources that need to be accessed by the whole app (like redux, theme provider, apollo provider, etc.) must be stored here. We try to keep this file light, so only put work here if it is **_absolutely_** necessry

- **config.js**

  - Used to store constants that are important to the functionality of the app (like api urls, api keys, query limits, etc.)

- **theme.js**

  - Used to store constants that are important to style (like colors, fonts, widths, heights, etc.). This is also where we load our fonts.

- **containers**

  - Used to store the different "Pages" of the app.
    **Note:** Pages are determined by url. If you can reach a component by going to a specific url and that component is the root of that url, then it should go into containers.

- **components**

  - The top level components folder is used to store components that will be used throughout the app. If a component is used in more than one container, then it should be in this folder.
