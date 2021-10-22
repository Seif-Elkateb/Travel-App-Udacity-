
//https://www.codegrepper.com/code-examples/javascript/set+min+date+field+to+current+date
// get date formated in year-month-day
export const getDate=(date)=>{
  const currentDate=date||new Date(); // get current date
  let day=(currentDate.getDate()).toString(); // get the day
  let month= (currentDate.getMonth()+1).toString(); //get the month
  let year = (currentDate.getFullYear()).toString(); // get the year
  // convert day to two character string
  if(day.length<2)
  {
    day='0'+day;
  }
  // convert month to two characters string
  if(month.length<2)
  {
    month='0'+month;
  }
  const finalDate=year+'-'+month+'-'+day;
  return finalDate;
}
