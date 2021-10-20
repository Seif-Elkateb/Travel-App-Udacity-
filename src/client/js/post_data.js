
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
  const  responseData= await response.json();
  console.log(responseData);
}
catch(error)
{
  console.log(error);
}

}