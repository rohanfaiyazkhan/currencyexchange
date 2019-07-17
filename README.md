Simple currency converter app built in React. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Free Currency Converter API](https://free.currencyconverterapi.com/). The demo is hosted on [Netlify](https://agitated-minsky-d1cd43.netlify.com/).

As this was a very simple app I managed to do it in two components- one for the form and one for the history. The only hook I have used is useState as it was all I needed. I initially wanted a searchable dropdown for the currency input and so I used HTML5 datalist. However, I soon realised datalist is not well supported across browsers, for example in mobile it appears as a plain input field. I did not want to make a network request everytime the app started so I hard coded the list of available currencies as it is unlikely to change soon. side from that the app works as expected. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


