//Request to delete the user when clicking on the button
async function deleteUser(){
    const response = await fetch('/delete', {
      method: 'DELETE', 
    });
    let deleteStatus = await response
   
    if (deleteStatus.status == 200) {
      const response = await fetch('/findDel', {
      method: 'POST', 
    });

    await response
    
    location.reload();
   }
   console.log(a);
   }



   let butonDelete = document.querySelector('.buttonDel')
   butonDelete.addEventListener('click',  deleteUser)