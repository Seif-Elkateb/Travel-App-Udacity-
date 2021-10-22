// get the number of days / months /years between the travel date and today
export const countDown=(travelDate)=>{
  const today= new Date(); 
  const travelDay= travelDate.getDate(); 
  const travelMonth= travelDate.getMonth();
  const travelYear=travelDate.getFullYear();
  const currentDay=today.getDate();
  const currentMonth= today.getMonth();
  const currentYear= today.getFullYear();
  let year=travelYear-currentYear,month,day;
  if(travelMonth>=currentMonth)
    month=travelMonth-currentMonth;
  else 
  {
    year-=1;
    month=(12-currentMonth)+travelMonth;
  }
  if(travelDay>=currentDay)
    day=travelDay-currentDay;
  else
  {
    day=((new Date(currentYear,currentMonth+1,0)).getDate()-currentDay)+travelDay;
    month-=1;
  }
    return {day,month,year};
}