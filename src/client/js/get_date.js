
//https://www.codegrepper.com/code-examples/javascript/set+min+date+field+to+current+date
export const getDate=()=>{
  const currentDate=new Date();
  let day=(currentDate.getDate()).toString();
  let month= (currentDate.getMonth()+1).toString();
  let year = (currentDate.getFullYear()).toString();
  if(day.length<2)
  {
    day='0'+day;
  }
  if(month.length<2)
  {
    month='0'+month;
  }
  const finalDate=year+'-'+month+'-'+day;
  return finalDate;
}
