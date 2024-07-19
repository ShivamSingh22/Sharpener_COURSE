function handleFormSubmit(event) {
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    username: username,
    email: email,
    phone: phone
  };

  axios
    .post("http://localhost:8000/", obj)
    .then((res) => {
      console.log(res.data);
      displayDetails(res.data.newUser);
    })
    .catch((err) => {
      console.log(err);
    });

  event.target.reset();
}

function displayDetails(appDetails) {
  const userList = document.querySelector('ul');
  const listItem = document.createElement('li');

  listItem.textContent = `${appDetails.username} - ${appDetails.email} - ${appDetails.phone}`;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  userList.appendChild(listItem);

  editButton.addEventListener('click',function(){
    deleteUser(appDetails.id,listItem);

      document.querySelector('#email').value=appDetails.email;
      document.querySelector('#phone').value=appDetails.phone;
      document.querySelector('#username').value=appDetails.username;
  });

  deleteButton.addEventListener('click', function() {
    deleteUser(appDetails.id, listItem);
  });
}

function deleteUser(userId,listItem){
  
    axios
    .delete(`http://localhost:8000/${userId}`)
    .then(()=>{
      listItem.remove();
    })
    .catch((err)=>{
      console.log(err);
    })
  
}


window.addEventListener('DOMContentLoaded', function () {
  axios
    .get('http://localhost:8000/')
    .then((res) => {
      const prevData = res.data;
      console.log(prevData.users);
      for (let i = 0; i < prevData.users.length; i++) {
        displayDetails(prevData.users[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
