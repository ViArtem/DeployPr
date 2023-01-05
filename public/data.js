//A function that sends a request to receive the first and last name of the user to be changed and inserts them into forms
async function getData() {
const response = await fetch('/updateFieldFilling', {
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
  return await response.json()
  
}
 getData().then((data)=>{
    document.querySelector('.inpName').value = `${data.name.firstName} ${data.name.lastName}`
    document.querySelector('.inpNum').value = data.number
 })








