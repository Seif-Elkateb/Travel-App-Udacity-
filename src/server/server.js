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
const server= app.listen(port,listening);







// /*
// create a post route /sendurl
// 1-the post route get the object sent from the client side 
// 2- call the postData function with the articleUrl property
// 3- get the response object from postData and send it back to the user
// */
// app.post('/sendurl',async(req,res)=>{
//   console.log('new request');
//   console.log(req.body);
//   const response=await postData(req.body.articleUrl);
//   res.send(response);
// });

// /*
// perform get request to the api endpoint with the key,lang,url 
// fetch the response data and return agreement,subjectivity,irony,confidence,score_tag properties
// */
// const postData=async (url)=>{
//   try{
//   const apiUrl=`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.key}&lang=en&url=${url}`;
//   const response = await axios.get(apiUrl);
//     const {agreement,subjectivity,irony,confidence,score_tag}= response.data;
//     console.log({agreement,subjectivity,irony,confidence,score_tag});
//     return {agreement,subjectivity,irony,confidence,score_tag};
//   }
//   catch(error){
//     console.log(error);
//   }
// }