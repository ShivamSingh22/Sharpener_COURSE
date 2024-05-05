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
  
    localStorage.setItem(UserDetails.user,udSerialized);

    let udDeserialized=JSON.parse(localStorage.getItem(UserDetails.user));

    const ul = document.querySelector('ul');
    const li=document.createElement('li');
    ul.appendChild(li);
 
    li.innerHTML=udDeserialized.user+'-'+udDeserialized.em+'-'+udDeserialized.ph;


  }
  
    module.exports=handleFormSubmit;