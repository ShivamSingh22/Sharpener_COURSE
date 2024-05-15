function handleFormSubmit(event) {
    event.preventDefault();
    const imageUrl = event.target.imageurl.value;
    const title = event.target.title.value;
    const description = event.target.desc.value;
  
    const obj = {
      imageUrl: imageUrl,
      title: title,
      description: description
    };
  
    axios
      .post("https://crudcrud.com/api/e87e3fe7253849d4a19bca062dde099b/blog", obj)
      .then((res) => {
        displayBlogDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  
    event.target.reset();
  }
  
  function displayBlogDetails(blogDetails) {
    const userList = document.querySelector('ul');
  
    const listItem = document.createElement('li');
  
    const img = document.createElement('img');
    img.src = blogDetails.imageUrl;
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = blogDetails.title;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = blogDetails.description;
  
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
  
    listItem.appendChild(titleElement);
    listItem.appendChild(img);
    listItem.appendChild(descriptionElement);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
  
    userList.appendChild(listItem);
    
    const totalBlogCountElement = document.querySelector('h2');
    const currentCount = userList.querySelectorAll('li').length;
    totalBlogCountElement.textContent = `Total Blog: ${currentCount}`;

    editButton.addEventListener('click',function(){
        axios
        .delete(`https://crudcrud.com/api/e87e3fe7253849d4a19bca062dde099b/blog/${blogDetails._id}`)
        .then(()=>{
            userList.removeChild(listItem);
        })
        .catch((err)=>{
            console.log(err);
        })
        
        const updatedCount = userList.querySelectorAll('li').length;
        totalBlogCountElement.textContent = `Total Blog: ${updatedCount}`;

        document.querySelector('#imageurl').value=blogDetails.imageUrl;
        document.querySelector('#title').value=blogDetails.title;
        document.querySelector('#desc').value=blogDetails.description;
    })
  
    deleteButton.addEventListener('click', function () {

      axios
        .delete(`https://crudcrud.com/api/e87e3fe7253849d4a19bca062dde099b/blog/${blogDetails._id}`)
        .then(() => {
          
          userList.removeChild(listItem);
        })
        .catch((err) => {
          console.log(err);
        });

        const updatedCount = userList.querySelectorAll('li').length;
        totalBlogCountElement.textContent = `Total Blog: ${updatedCount}`;
    });
  }
  