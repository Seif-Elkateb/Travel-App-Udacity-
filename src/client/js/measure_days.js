//measure number of days between any date and the current date
export const measureDays=(travelDate)=>{
  const currentDate=new Date();
  const t1= travelDate.getTime(); // get date in mileseconds
  const t2= currentDate.getTime(); // get date in mileseconds
  const diff=Math.ceil((t1-t2)/(1000*60*60*24)); // divide date by number of mileseconds in a day
  // console.log(diff);
  return  diff;
}