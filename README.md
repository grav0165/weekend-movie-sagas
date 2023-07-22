
# REDUX SAGA MOVIE PROJECT

## Description

_Duration: Weekend Project Sprint_

This is a project to display a list of movies from a database, as though the client had added a list of all movies they own to their own list. When you click on a movie, it will go to that movie's detailed information. This includes movie poster, description, and genres associated with the movie. These genres are stored in a separate database chart, along with a key chart used to connect movie to database. 

Using advanced SQL requests and Redux-Saga requests, this project was to demonstrate the methology of 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [MaterialUI](https://mui.com/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Redux](https://react.dev/)
- [ReduxSaga](https://redux-saga.js.org/)

## Installation

The project has all dependencies sources in the package.json file. However, additional icons were used from the MaterialUI project which can be sourced from https://mui.com/material-ui/material-icons/. 

1. Create a database named `saga_movies_weekend`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Upon launching the server and client, you will be taken to a landing page of movies.
2. Each movie card is clickable which will take you to a details page for the movie.
3. The details page will list the movie title, poster, any associated genres, and a brief plot description.
4. Clicking Return at the bottom of the page will return you to the movie list page again to click on any other movies you'd like further information



## Built With

 - Javascript
 - React
 - Redux
 - Node.js
 - MaterialUI
 - Axios
 - Redux-Saga

## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please email me at [grav0165@gmail.com](grav0165@gmail.com)