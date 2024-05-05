// Write your code below:
function handleFormSubmit(event){
    event.preventDefault();
    
    const username=document.querySelector('#username').value;
    const email=document.querySelector('#email').value;
    const phone=document.querySelector('#phone').value;
  
    let UserDetails={
      user:username,
      em:email,
      ph:phone,
    }
  
    let udSerialized=JSON.stringify(UserDetails);
  
    localStorage.setItem("User Details",udSerialized);
  }
  
  module.exports=handleFormSubmit;