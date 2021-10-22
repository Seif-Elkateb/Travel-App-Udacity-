export const getData= async (url)=>{
  try{
    const response = await fetch(url);
    if(response.ok===false){
      throw new Error('request failed');

    }
    const responseData=await response.json();
    return responseData;
  }
  catch(error){
    console.log(error);
  }
}