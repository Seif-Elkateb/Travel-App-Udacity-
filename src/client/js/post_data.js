
export const postData=async(url,data)=>{
  try{
  const response= await fetch(url,{
    method:'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
    if(response.ok===false)
    {
      throw new Error('request failed');
    }
  const  responseData= await response.json();
      return responseData;
}
catch(error)
{
  console.log(error);
}

}