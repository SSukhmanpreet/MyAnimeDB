# MyAnimeDB - Explore your favourite anime
> Discover the enchanting world of anime like never before with MyAnimeDB, your ultimate destination for exploring the captivating realm of Studio Ghibli and beyond.

Welcome to MyAnimeDB! This project is built using ReactJS and Material UI, and it allows users to explore Studio Ghibli's anime films.

## Application Link
You can check out the live application: [MyAnimeDB](https://my-anime-db.netlify.app/ "MyAnimeDB")

## Table Of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features
- View a list of Studio Ghibli anime films.
- See detailed information about each film, including title, director, producer, release year, rating, watch-time, cast, description, translation and pronunciation.
- Responsive and user-friendly design.

## Installation
To run this project locally, follow these steps:
##### 1. Navigate to the desired directory on your local system.
##### 2. Clone the repository:
``
git clone "https://github.com/SSukhmanpreet/MyAnimeDB.git"
``
##### 3. Navigate to the project directory:
``cd MyAnimeDB``

##### 4. Install the dependencies:
``npm install --legacy-peer-deps``

## Usage
#####After installing the dependencies, you can start the development server:
``
npm start
``
##### The application will be available at [http://localhost:3000](http://localhost:3000 "http://localhost:3000"). Open your web browser and navigate to this URL to use the application.

## API Integration
MyAnimDB integrates with the Studio Ghibli API to fetch anime film data. The API provides endpoints to retrieve information about Ghibli films.
To configure the API integration in this project, create a .env file in the root directory and add your API endpoint. For example:
````javascript
REACT_APP_GHIBLI_API_ENDPOINT=https://ghibliapi.vercel.com
````
In your React components, you can use Axios, fetch or another HTTP library to make API requests and fetch data from the specified endpoint.

```javascript
import axios from 'axios';

const apiUrl = process.env.REACT_APP_GHIBLI_API_ENDPOINT;

// Example usage:
axios.get(`${apiUrl}/films`).then((response) => {
  // Handle the API response here
});

```

## Contributing
Contributions to this project are welcome!
If you would like to contribute, please follow these steps:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Make your changes and commit them.
    Push your changes to your fork.
    Create a pull request to merge your changes into the main repository.

