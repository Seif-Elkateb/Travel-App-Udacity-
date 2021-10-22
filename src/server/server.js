const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
/* Dependencies */
const bodyParser = require("body-parser");

let travelData={};

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
app.use(express.static("dist"));


//get the coordinates from geonames api depending on the location provided 
const getCoordinates = async (location) => {
  const url = `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${process.env.geonames}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// getweather take long,lat returned from getCoordinates function
// getWeather also takes future bolean which indicates whether the trip after 7 days or more !
const getWeather = async (lon, lat, future) => {
  let url;
  if (future)
    url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.weatherbit}`; // set url to forcast endpoint
  else
    url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.weatherbit}`;  // set url to daily weather endpoint
  try {
    const response = await axios.get(url);
    return response.data.data[0];
  } catch (error) {
    console.log(error);
  }
};

//getImage tak two arguments input which is the name on the location and back up which is the country of that location
// if after fetch there is no results for the location getImage call itself recursively but with the backup as input (country) 
const getImage = async (input,backup='') => {
  const url = `https://pixabay.com/api/?key=${process.env.pixabay}&q=${input}&image_type=photo&safesearch=true&category=places`;
  try {
    const response = await axios.get(url);
    // check if there is a result
    if (response.data.hits.length === 0) {
      console.log(1);
      return getImage(backup); // call the getImage with the country instead
    }
    else 
    {
       return response.data.hits[0].largeImageURL //
    }
  } catch (error) {
    console.log(error);
  }
};
const getData=async(location,future)=>{
  try{
  const locationResponse= await getCoordinates(location); 
  // check if the there is a result to the location provided 
  // if there is no result return result = none 
  if(locationResponse.totalResultsCount===0){
    return {result:'none'};
  }
  // if there is result return the location data 
  const {lat,lng,population,countryName,name:locationName}= locationResponse.geonames[0];
  // get the weather data fom getWeather
  const  {temp,weather:{description,icon},wind_spd:windSpeed,clouds,rh:humidity}=await getWeather(lng,lat,future);
  // put the icon fetched from the api in url to get the corresponding png to that icon
  const weatherImg=`https://www.weatherbit.io/static/img/icons/${icon}.png`;
  // return the img of the location 
  const locationImg=await getImage(location,countryName);
  console.log(locationImg)
  return {countryName,population,temp,description,weatherImg,locationImg,windSpeed,clouds,humidity,locationName};
  }
  catch(error)
  {
    console.log(error);
  }
}
//test route
app.get('/test',(req,res)=>{
  console.log('new request to /test route');
  res.send({message:'hello world'});

})
app.post('/senddata',async(req,res)=>{
    console.log('new request to /senddata route\n',req.body)
    const userInput=req.body; // get body of the request 
    travelData=await getData(userInput.location,userInput.future); // get travel data 
    res.send();
})
app.get('/getdata',(req,res)=>{
  console.log('new request to /getdata route');
  res.send(travelData);

})
module.exports=app;