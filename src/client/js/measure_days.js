export const measureDays=(travelDate)=>{
  const currentDate=new Date();
  const t1= travelDate.getTime();
  const t2= currentDate.getTime();
  const diff=Math.ceil((t1-t2)/(1000*60*60*24));
  console.log(diff);
  return  diff;
}