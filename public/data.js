
async function getData() {

const response = await fetch('/updat', {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
  
    },
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify() 
  });
  return  await response.json()
}
 getData().then((data)=>{
    document.querySelector('.inpName').value = `${data.name.firstname} ${data.name.lastname}`
    document.querySelector('.inpNum').value = data.number
 })






