# Build 20 React Projects

### 20 + 5 Simple React projects to hone and demonstrate skills

#### Each project focuses on a certain area of web and software design using React

 1. Accordion
    - A component for displaying certain information when selected. 
    - Project uses the useState hook
    - Information is displayed either singular selections or multiple, depending on the state of the page

 2. Random Color Generator
    - A component which generates a random color code
    - Component can generate both HEX and RGB color codes
    - Component changes the background color to the randomly selected color code

 3. Star Rating
    - A component which builds a rating system using star icons
    - Component uses useState hook to change the rating based on hovering and clicking
    - Star icons are highlighted when hovering and change the amount of highlighted stars when clicked

 4. Image Slider
    - A component which maps a select number of images to the page and scrolls through them
    - Arrow icons are used to scroll through the images. As the user scrolls, the state of the images changes based on scroll direction and images are displayed in the order they appear in the API

 5. Load More Data
    - A component which takes a fetch from an API and renders data on the screen
    - Component only renders a set number of data
    - Clicking the "Load More" button will render a set number of additional data on the screen until the limit has been reached
    - ***There is currently an error in the component where the initial data is loaded twice. Functionality works for additional renders, but this error needs to be fixed before project is complete.***
    - ***Error occurs because React.StrictMode calls the data twice in development mode. Removing Strict More from the index.js file fixes the issue.***

--------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
