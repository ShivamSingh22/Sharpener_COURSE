let currentCount=0;

function changeBlogCount(flag){
  const totalBlogCountElement = document.querySelector('h2');
  if(flag){
    currentCount=currentCount+1;
    totalBlogCountElement.textContent = `Total Blog: ${currentCount}`;
  }else{
    if(currentCount>0){
      currentCount=currentCount-1;
    }
    
    totalBlogCountElement.textContent = `Total Blog: ${currentCount}`;
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const mainButton=document.querySelector('#main_button')
  mainButton.innerHTML="POST BLOG";
  const imageUrl = event.target.imageurl.value;
  const title = event.target.title.value;
  const description = event.target.desc.value;

  const obj = {
    imageUrl: imageUrl,
    title: title,
    description: description
  };

  axios
    .post("https://crudcrud.com/api/d1401165f8fc483abd1058ccd8ec47dd/blog", obj)
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
  changeBlogCount(true);

  editButton.addEventListener('click',function(){
    changeBlogCount(false);
      axios
      .delete(`https://crudcrud.com/api/d1401165f8fc483abd1058ccd8ec47dd/blog/${blogDetails._id}`)
      .then(()=>{
          userList.removeChild(listItem);
      })
      .catch((err)=>{
          console.log(err);
      })

      document.querySelector('#imageurl').value=blogDetails.imageUrl;
      document.querySelector('#title').value=blogDetails.title;
      document.querySelector('#desc').value=blogDetails.description;

      const mainButton=document.querySelector('#main_button')
      mainButton.innerHTML="EDIT BLOG";
      
  })

  deleteButton.addEventListener('click', function () {
    changeBlogCount(false);
    axios
      .delete(`https://crudcrud.com/api/d1401165f8fc483abd1058ccd8ec47dd/blog/${blogDetails._id}`)
      .then(() => {
        
        userList.removeChild(listItem);
      })
      .catch((err) => {
        console.log(err);
      }); 
  });
}

document.addEventListener('DOMContentLoaded',function(){
  axios
    .get("https://crudcrud.com/api/d1401165f8fc483abd1058ccd8ec47dd/blog")
    .then((res)=>{
      const prevData=res.data;
      console.log(prevData);
      for(let i=0;i<prevData.length;i++){
        displayBlogDetails(prevData[i]);
      }
    });
})