// Write your code below:
function handleFormSubmit(event){
  
    event.preventDefault();

    const username=document.querySelector('#username');
    const email=document.querySelector('#email');
    const phone=document.querySelector('#phone');
    
    const uTxt=username.value;
    const eTxt=email.value;
    const pTxt=phone.value;
    
    localStorage.setItem('Username',uTxt);
    localStorage.setItem('Email',eTxt);
    localStorage.setItem('Phone',pTxt);
    
    }
    
    //module.exports=handleFormSubmit