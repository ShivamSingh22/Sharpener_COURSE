// Write your code below:
//API:https://crudcrud.com/api/e87e3fe7253849d4a19bca062dde099b

function handleFormSubmit(event) {
  event.preventDefault();
  const username=event.target.username.value;
  const email=event.target.email.value;
  const contact=event.target.phone.value;

  const obj={
    username:username,
    email:email,
    contact:contact
  }
  console.log(obj);

  axios
  .post("https://crudcrud.com/api/e87e3fe7253849d4a19bca062dde099b/user",obj)
  .then((req)=>{
    displayUserDetails(req.data); 
    console.log(req)
  })
  .catch(err=>console.log(err));

  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  
}

function displayUserDetails(userDetails){
const userList=document.querySelector('ul');

const listItem=document.createElement('li');
const editButton=document.createElement('button');
const deleteBtn=document.createElement('button');

listItem.textContent = `${userDetails.username} - ${userDetails.email} - ${userDetails.contact}`;

editButton.textContent='Edit';
deleteBtn.textContent='Delete';

listItem.appendChild(editButton);
listItem.appendChild(deleteBtn);
userList.appendChild(listItem);

editButton.addEventListener('click',function(){
    axios
    .delete(`https://crudcrud.com/api/e87e3fe7253849d4a19bca062dde099b/user/${userDetails._id}`)
    .then(()=>{
        userList.removeChild(listItem);
    })
    .catch((err)=>{
        console.log(err);
    })

    const user=document.querySelector('#username');
    const emal=document.querySelector('#email');
    const phone=document.querySelector('#phone');

    phone.value=userDetails.contact;
    emal.value=userDetails.email;
    user.value=userDetails.username;
})

deleteBtn.addEventListener('click',function(){
    axios
    .delete(`https://crudcrud.com/api/e87e3fe7253849d4a19bca062dde099b/user/${userDetails._id}`)
    .then(()=>{
        userList.removeChild(listItem);
    })
    .catch((err)=>{
        console.log(err);
    })
})



}

// Do not touch the code below
//module.exports = handleFormSubmit;
