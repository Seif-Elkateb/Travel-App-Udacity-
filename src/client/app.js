/*
start imports
*/
import { postData } from "./js/post_data.js"; // responsible for posting data to the server
import { countDown } from "./js/count_down.js"; // responsible for count down feature
import { getDate } from "./js/get_date.js"; // responsible for getting the current date formated so it date limit could be set to date inputs
import { measureDays } from "./js/measure_days.js"; // responsilbe for deciding the number of days between today and the travel date
import { getData } from "./js/get_data.js";
import "./styles/style.scss"; // import scss

/*
end imports
*/

/*
define globals
*/
const inputLocation = document.querySelector("#location");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const submitBtn = document.querySelector("#submit-data");
const inputContainer= document.querySelector('.inputs');
const preloader= document.querySelector('#img-preloader');
const locationImg= document.querySelector('#location-img');
const weatherImg= document.querySelector('#weather-img');
const output= document.querySelector('.output');
const weatherDescription= document.querySelector('#weather-description');
const tempResult= document.querySelector('#temp');
const windSpeedResult=document.querySelector('#wind-speed');
const cloudsResult= document.querySelector('#clouds');
const humidityResult=document.querySelector('#humidity');
const tripStartResult= document.querySelector('#trip-start-date');
const tripCountryResult=document.querySelector('#trip-country');
const tripCityResult=document.querySelector('#trip-city');
const tripLengthResult=document.querySelector('#trip-length');
const countdownResult=document.querySelector('#countdown');

/*
end define globals
*/

/*
start functions
*/
// validate if user forget to enter any input
const checkvalues=()=>{
  if(inputLocation.value==='')
  {
    alert('Please Enter The Location');
    return false;
  }
  if(startDate.value==='')
  {
    alert('please Enter The Start Date Of Your Trip');
    return false;
  }
  if(endDate.value==='')
  {
    alert('please Enter The End Date Of Your Trip');
    return false;
  }
  return true;
}

const setLimit = () => {
  const tempDate1 = getDate(); //getting the value of today formated
  const tempDate2 = startDate.value || tempDate1; //getting the value of either the start date or today
  startDate.setAttribute("min", tempDate1); // setting the min for start date to today
  if (typeof endDate.value !== "undefined") {
    startDate.setAttribute("max", endDate.value); // setting the startDate max date to be the end date if the end date is submitted before the start date
  }
  endDate.setAttribute("min", tempDate2); // setting the min for endDate to be startDate if it's set or today
};
const getTravelData = async () => {
  if(!checkvalues())
    return ;
  inputContainer.style.display='none'; // hide the inputs div
  preloader.style.display='block';  // start the preloader
  const x = startDate.valueAsDate; // get the value of the start date as a date object
  console.log(x);
  const days = measureDays(x); // call the measureDays function to get n_OF_days between today and start date
  console.log(days);
  const future = days > 7 ? 1 : 0; // set boolean value to 1 if days>7 or 0 if days <7;
  console.log(future);
  const location = inputLocation.value;
  await postData("http://localhost:8081/senddata", { future, location }); // get the response from the server
  const response= await getData("http://localhost:8081/getdata");
  preloader.style.display='none';
  if(response.result==='none'){
    setTimeout(() => {
      alert('the location you entered is not found ');
    }, 500);
    
    inputContainer.style.display='block';
    startDate.value='';
    endDate.value='';
    inputLocation.value='';
    return;
  }
  // hide the preloader after fetching done
  console.log(response);
  updateUi(response);
};
const updateUi=(response)=>{
  locationImg.setAttribute('src',response.locationImg);
  weatherImg.setAttribute('src',response.weatherImg);
  weatherDescription.innerHTML=response.description;
  tempResult.innerHTML=response.temp+'&deg';
  cloudsResult.innerHTML='clouds '+response.clouds+'&deg';
  humidityResult.innerHTML='Humidity '+response.humidity+'&deg';
  windSpeedResult.innerHTML='Wind Speed '+Math.round(response.windSpeed)+' M/S';
  tripStartResult.innerHTML='Trip Starts in '+startDate.value;
  tripLengthResult.innerHTML='Trip Length is '+ measureDays(startDate.valueAsDate,endDate.valueAsDate)+' days';
  tripCountryResult.innerHTML='Country Name  '+response.countryName ;
  tripCityResult.innerHTML='City Name '+response.locationName;
  const countdownObject= countDown(startDate.valueAsDate);
  countdownResult.innerHTML='Countdown '+countdownObject.year+' years:'+countdownObject.month+' months:'+ countdownObject.day+' days';
  output.style.display='block';
}
/*
end functions
*/
/*
Event Listeners and function calls
*/
startDate.addEventListener("click", setLimit);
endDate.addEventListener("click", setLimit);
submitBtn.addEventListener("click", getTravelData);
/*
end event listeners and function calls
*/
