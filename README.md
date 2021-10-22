# FEND Capstone Trave App
## Basic Overview

This project allow users to plans their trips ahead as it provides them with data they need about the destination,trip details and weather.

The user enters the location of the trip,start date and end date of the trip and hit enter and he will get information about the destination from [Geonames API](https://www.geonames.org/), the photo of the destination entered from the [Pixabay API](https://pixabay.com/service/about/api/). and weather data from [Weatherbit API](https://www.weatherbit.io/api).

## Features Of the Project 
* The App displays the start of the trip , the country , city, and displays a countdown to the time of the trip
* The App displays the  temperatues,humidity,wind speed and clouds percentage along with a description of the current weather
* The App display An Image of the location entered by the user
* The user is provided the length of the trip
* The user is provided a weather icon from the Weatherbit Api depending on the code fetched from the weatherbit Api response
* If there is no match for the destination from the geonames API at all the user is alerted that he needs to enter another location
* if there is no match for the destination from the Pixabay API the an Image of the country of that destination is fetched from the API



## Build Tools used on the project

* Webpack
* Babel
* [Geonames API](https://www.geonames.org/)
* [Weatherbit API](https://www.weatherbit.io/api)
* [Pixabay API](https://pixabay.com/api/docs/)
* Javascript
* Node
* Express
* Google Workbox 
* Jest 
* suptertest for serverside testing

## Instructions  :memo:

### Project Setup :computer:
1. Fork the project Github repo, and then clone or download the zip file locally. Once you have the project locally, navigate to the project directory to install all 
dependencies. 

2. Make sure you have Node and Npm installed

```
node -v 
npm -v
```
3. Move to the project directory and type Npm install 

```
cd project_directory
npm install
```
4. This will install Devlopment dependencies including babel,jest, webpack plugins and loaders in addition to Production dependencies like Express and middleware

5. Get Api keys from 
* [Geonames API](https://www.geonames.org/)
* [Weatherbit API](https://www.weatherbit.io/api)
* [Pixabay API](https://pixabay.com/api/docs/)

6. Create a file called .env in the project root directory

7. In .env file create 3 variables and name them like this and set them equal to your private unique keys :
```
geonames=*****************************
weatherbit=****************************
pixabay=******************************

```
8.  At this point you have finished configuring everything and ready to run the project

### Running the Project :star:

1. Enter the following script to start the webpack dev server and it should run at port 8080 
```
npm run dev
```
2. Enter the following script to run the webpack production mode and create the dist folder that express server will point to 
```
npm run prod
```
3. After that run the Express server at port at port 8081 by typing this script
```
npm run start 
```
4. the server will be ready to accept requests at port 8081 and the main page can be accessed on localhost:8080




