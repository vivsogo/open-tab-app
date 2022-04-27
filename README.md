 # Drinks on tab 
 Drinks on Tab was created as a fun application to save your favorite drink recipes when going out with loved ones. During the pandemic all bars and social life had come to a halt and I had started to make drinks in the saftey of our home for my partner and I to enjoy.
 ## Description 
Open Tab is a Drink reciepe application that serves as a quick and convenient collection of favorite drinks in your pocket. One function of the application is the recipe search feature in which an updated collection of recipes can be sorted through using any keywords that a user might use. The second function is the ability to add a Drink using the "Add a New Drink" tab where the user can fill out a form that will then add the drink they input to the Drinks on tab. 
 ## Installation 
1. Fork and clone the repo
2. Cd into the project and run npm install
3. Run the json-server with: npm run server
4. Run the React server with: npm start
# Executing Program 
 This assignment required that I create a single page application using create-react-app. I added all my data using json-server to be able to make both Get and Post request to the server.  For my app I also used more than 5 components which I orginized in folders labeled Drinks and Navigation. The Drink folder held all components I would need for my Drink cards and recipes. For example my DrinkForm file held the form users would need in order to create a new reciepe for my app. 

![Alt Text](https://media.giphy.com/media/3uYdTPAsIyRc5GiIH1/giphy.gif)
 

inside my DrinkFilter I added an onchange event. This works when the user types keywords into the search bar and the drink card they are looking for appears.

![Alt Text](https://media.giphy.com/media/5bb1Q0AnAwoVAAe08m/giphy.gif)

I also added a home and about all of these routes were made accessible  using React Router. I used a Navbar to allow users to navigate between my four routes. 

![Alt Text](https://media.giphy.com/media/W3jXsFafR6UCbkypa8/giphy.gif)



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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)