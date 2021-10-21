const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
/* Dependencies */
const bodyParser = require("body-parser");
const port = 8081;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
const { json } = require("body-parser");
const { response } = require("express");
app.use(cors());
app.use(express.static("dist"));
// creating the server
const listening = () => {
  console.log("initialize server:\n");
  console.log(`server running on port ${port}`);
};
const server= app.listen(port,listening);

const getCoordinates = async (location) => {
  const url = `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${process.env.geonames}`;
  try {
    const response = await axios.get(url);
    return response.data.geonames[0];
  } catch (error) {
    console.log(error);
  }
};
const getWeather = async (lon, lat, future) => {
  let url;
  if (future)
    url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.weatherbit}`;
  else
    url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.weatherbit}`;
  try {
    const response = await axios.get(url);
    return response.data.data[0];
  } catch (error) {
    console.log(error);
  }
};

const getImage = async (input,backup='') => {
  const url = `https://pixabay.com/api/?key=${process.env.pixabay}&q=${input}&image_type=photo&safesearch=true&category=places`;
  try {
    const response = await axios.get(url);
    if (response.data.hits.length === 0) {
      getImage(backup);
    }
    else 
    {
       return response.data.hits[0].largeImageURL
    }
  } catch (error) {
    console.log(error);
  }
};
const getData=async(location,future)=>{
  try{
  const {lat,lng,population,countryName}= await getCoordinates(location);
  const  {temp,weather:{description,icon},wind_spd:windSpeed,clouds,rh:humidity}=await getWeather(lng,lat,future);
  const weatherImg=`https://www.weatherbit.io/static/img/icons/${icon}.png`;
  const locationImg=await getImage(location,countryName);
  return {countryName,population,temp,description,weatherImg,locationImg,windSpeed,clouds,humidity};
  }
  catch(error)
  {
    console.log(error);
  }
}
app.post('/senddata',async(req,res)=>{
    const userInput=req.body;
    const traveData=await getData(userInput.location,userInput.future);
    res.send(traveData);
})
