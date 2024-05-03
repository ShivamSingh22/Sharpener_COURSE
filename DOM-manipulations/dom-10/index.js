// Add the Edit Button:
const li = document.querySelectorAll('li');

li.forEach(item => {
    const btn = document.createElement('button');
    const btnTxt = document.createTextNode('Edit');
    btn.appendChild(btnTxt);
    btn.className = 'edit-btn';
    item.appendChild(btn);
});

// Implement the code as in video but with one extra 'Edit' button in 'li'

const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit',function(event){
  event.preventDefault();

  const newFruitName=document.querySelector('#fruit-to-add')
  const newListItem=document.createElement('li');
  const newTxt=document.createTextNode(newFruitName.value);
  newListItem.appendChild(newTxt);
  newListItem.className='fruit';

    const btn1 = document.createElement('button');
    const btnTxt1 = document.createTextNode('x');
    btn1.appendChild(btnTxt1);
    btn1.className = 'delete-btn';
    newListItem.appendChild(btn1);

    const btn = document.createElement('button');
    const btnTxt = document.createTextNode('Edit');
    btn.appendChild(btnTxt);
    btn.className = 'edit-btn';
  newListItem.appendChild(btn);

  fruits.appendChild(newListItem);

  fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
      fruits.removeChild(event.target.parentElement);
    }
  })
  
})
