// post user input to the server
export const postData=async(url,data)=>{
  try{
   await fetch(url,{
    method:'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
    //check if the response is not oky 
    if(response.ok===false)
    {
      throw new Error('request failed');
    }
}
catch(error)
{
  console.log(error);
}
}