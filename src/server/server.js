const express= require('express');
const axios = require('axios');
const path=require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
/* Dependencies */
const bodyParser = require('body-parser')
const port = 8081;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
const { json } = require('body-parser');
app.use(cors());
app.use(express.static('dist'));
// creating the server 
const listening=()=>{
  console.log("initialize server:\n")
  console.log(`server running on port ${port}`);
}
// const server= app.listen(port,listening);

const getCoordinates=async(input)=>{
  const url=`http://api.geonames.org/searchJSON?q=${input}&maxRows=1&username=${process.env.geonames}`
try{
  const response = await axios.get(url);
  console.log(response.data);
}
catch(error)
{
  console.log(error);
}
}
const getCurrentWeather=async(lon,lat)=>{
  const url=`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.weatherbit}`;
  try{
    const response= await axios.get(url);
    console.log(response.data.data[0]);
  }
  catch(error){
    console.log(error);
  }
}
const getFutureForecast=async(lon,lat)=>{
  const url=`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.weatherbit}`;
  try{
    const response= await axios.get(url);
    console.log(response.data);
  }
  catch(error)
  {
    console.log(error);
  }
}
const getImage=async(input)=>{
  const url=`https://pixabay.com/api/?key=${process.env.pixabay}&q=${input}&image_type=photo&safesearch=true`;
  try{
  const response = await axios.get(url);
  console.log(response.data.hits[0].largeImageURL);
  }
  catch(error){
    console.log(error);
  }
}
// getCurrentWeather(30.46823,31.03408);
//  getCoordinates('shubrakit');
// getFutureForecast(30.46823,31.03408);
// getImage('london');