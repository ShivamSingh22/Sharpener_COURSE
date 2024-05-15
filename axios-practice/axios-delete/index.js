function handleFormSubmit(event) {
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    axios.post("https://crudcrud.com/api/e2ad6606e6ac4011895bd9eed2368b8c/todo", {
      username: username,
      email: email,
      phone: phone
    })
    .then(response => {
      displayUserOnScreen(response.data);
    })
    .catch(error => {
      console.error("Error saving user details:", error);
    });
  }
  
  function displayUserOnScreen(userDetails) {
    const userList = document.querySelector("ul");
    const userItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    
    userItem.textContent = `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`;

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
     
      axios.delete(`https://crudcrud.com/api/e2ad6606e6ac4011895bd9eed2368b8c/todo/${userDetails._id}`)
        .then(() => {
         
          userList.removeChild(userItem);
        })
        .catch(error => {
          console.error("Error deleting user details:", error);
        });
    });
  
    userItem.appendChild(deleteButton);
    
   
    userList.appendChild(userItem);
  }
  
  // Do not touch the code below
  module.exports = handleFormSubmit;
  