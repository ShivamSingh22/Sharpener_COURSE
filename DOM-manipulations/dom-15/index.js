function handleFormSubmit(event) {
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const userDetails = {
      username: username,
      email: email,
      phone: phone
    };
  
    // Retrieve existing user details array from localStorage
    const existingUserDetails = JSON.parse(localStorage.getItem('UserDetails')) || [];
  
    // Add the new user details to the array
    existingUserDetails.push(userDetails);
  
    // Store the updated user details array back into localStorage
    localStorage.setItem('UserDetails', JSON.stringify(existingUserDetails));
  
    // Update the displayed user list
    displayUserList(existingUserDetails);
  }
  
  // Function to display user details in the list
  function displayUserList(userDetailsArray) {
    const ul = document.querySelector('ul');
  
    // Clear existing list items
    ul.innerHTML = '';
  
    // Iterate through each user details object and create a list item with delete button
    userDetailsArray.forEach(userDetails => {
      const li = document.createElement('li');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
  
      // Event listener for delete button click
      deleteBtn.addEventListener('click', () => {
        // Remove list item from DOM
        ul.removeChild(li);
  
        // Remove user details from localStorage
        const updatedUserDetails = userDetailsArray.filter(
          user => user.username !== userDetails.username
        );
        localStorage.setItem('UserDetails', JSON.stringify(updatedUserDetails));
      });
  
      // Display user details within list item
      li.textContent = `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`;
      li.appendChild(deleteBtn);
      ul.appendChild(li);
    });
  }
  
  module.exports = handleFormSubmit;
  