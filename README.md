# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run the project
1. Clone project from the repo
2. Do 'npm install' to install dependencies
3. Run 'npm run start' ('npm start')
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
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

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Project structure
1. Go to the 'src' folder
2. There ar files and folders:
- index.js; root .js file, connecting all components and connecting with ReactDOM library
- App.js; root React component; includes list of components in Route components
- .env; contains enviroments variables; here it is not in the .gitignore file to make it publick to clone from the repo
- routes.js; contains the list of the routes;
- setupTests.js; default settings for tests, provided by the 'create-react-app';
- testsUtils.js; contains the utility functions for writing test;
- 'pages' folder; contains React components, providing pages where user navigates;
- 'components' folder; contains slmaller components, supposed to be used in the page's components and in other more common components;
- 'store' folder; contains settings og the Redu store
- 'utils' folder; contains common functions and logic   