// import "regenerator-runtime/runtime";
import { postData } from "./js/post_data.js";
import {countDown} from './js/count_down.js';
import { getDate } from "./js/get_date.js";
import {measureDays} from "./js/measure_days.js"
import './styles/style.scss'




postData('/senddata',{location:'cairo',future:1})
.then(response=>{
  console.log(response);
});
console.log("foobar".includes("foo"))
