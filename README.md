# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initial Setup

Created React App using npx create-react-app 'file_name'

### Dependencies:

### `For Route Management`
react-router-dom

### `To make HTTP Request`
axios


### `For State Management`
redux
react-redux
redux-thunk

### `For Styling`
@material-ui/core
@material-ui/icons
@material-ui/styles
bootstrap


## To connect Spotify to your application

To connect to spotify api three things are required: authorize_url, client_id and redirect_url. 

Login/Signup to spotify Developer portal.

Create an Application

After Creating application click on edit settings and in there paste the 'Redirect URIs' and press Add and save the changes

These are the details that needs to be included in your code 

    const CLIENT_ID = 'YOUR_CLIENT_ID';(as provided by spotify)
 
    const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
    
    const REDIRECT_URL = 'http://localhost:3000/callback';(in the development phase for localhost, it needs to be changed before deployment with your website url)
    
Note: Try to keep sensitive data in .env file and add it to .gitignore

API URL  = 'https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist';
      
## Working of Application

On the Home page of this application there is option to Login

When user Clicks on Login, he/she will be asked to authorize his/her spotify account

Once authorization Succeeds, user will be redirected to the page as we per the REDIRECT_URL that have been mentioned

After going to the redirected page (in case of this application, the user will be redirected to Dashboard page).

Where user can search albums, artists and playlists and according to user Response the data from the spotify API will be fetched and will be shown accordingly.

If a user wants to listen any song he/she can click on the image of his desired song, he/she will be redirected to spotify application where that song is available.

## Working With Redux

Redux is a state management package and we need to install react-redux helps to connect react and redux.

### `Terms Common with Redux`

Store: Stores all the states of the application in a globalized manner.

Action: It describes what a state want to do.

Reducer: It decides what changes will be done in state accorindg to the action specified

Dispatch: It acts as a a medium of communication between Reducer and action. 

To create Strore in react first of all import {createstore} from redux.

Initializing store using createstore according to the need of this application that displays data of Albums, Artists and Playlists to the user

     const store = createStore(
        combineReducers({
        albums:albumsReducer,
        artists:artistReducer,
        playlists:playListReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    )

Sending information from action to reducers using dispatch


          export const initiateGetResult = (searchTerm) => {
              return async (dispatch) => {
                try {
                  const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
                    searchTerm
                  )}&type=album,playlist,artist`;
                  const result = await get(API_URL);               
                  const { albums, artists, playlists } = result;
                  dispatch(setAlbums(albums));
                  dispatch(setArtists(artists));
                  return dispatch(setPlaylists(playlists));
                } catch (error) {
                  console.log('error', error);
                }
              };
             };

Reducer Implemeting state actions as recieved by dispatch action using state and payloads

              const albumsReducer =(state={}, action)=>{
                  const { albums } = action;
                  switch (action.type) {

                      case SET_ALBUMS:
                        return albums;
                      default:
                 return state;
          }
      };
      
      
      
## Material-UI

Material-ui is used for designing purpose, having buth material design and animation Property and is easily customiable

To style using Material-ui first of all we have to install material dependencie. There are different type of dependencies for different functionality and designs.

For Buttons, forms, textbox etc we need to install @material-ui/core.

For Icons, We need to install @material-ui/icons

For Styling purpose we need to install @material-ui/styles But to use it in our app we need to import makesyles from @material-ui/styles as follows:

        import {makeStyles} from '@material-ui/core';

        export default makeStyles((theme)=>({


          body:{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-around',
              alignItems:'center',
              alignContent:'center',
              height:'100vh',

          },
          });
          
          
    
         

    
              

  

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
