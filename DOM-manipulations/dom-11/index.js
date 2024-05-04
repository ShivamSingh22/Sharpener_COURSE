// Add input element inside form, before button, to take fruit description
const form=document.querySelector('form');
const addButton = document.querySelector('form button[type="submit"]');

const descInput=document.createElement('input');
descInput.type = 'text';
descInput.id='description'

form.insertBefore(descInput,addButton);

// Show the fruit description in italics on the next line

const fruits=document.querySelector('.fruits');
const fruitItems=document.querySelectorAll('.fruit');

form.addEventListener('submit',function(event){
    event.preventDefault();
  
    const newFruitName=document.querySelector('#fruit-to-add');
    const newDesc=document.querySelector('#description');

    const newListItem=document.createElement('li');
    const newParaItem=document.createElement('p');

    const newTxt=document.createTextNode(newFruitName.value);

    const descTxt=document.createTextNode(newDesc.value);
   
    newListItem.appendChild(newTxt);
    newParaItem.appendChild(descTxt);
    newParaItem.style.fontStyle='italic';

    newListItem.className='fruit';
    newParaItem.className='descPara';

    newListItem.appendChild(newParaItem);
    fruits.appendChild(newListItem);

    newFruitName.value='';
    newDesc.value='';

    const btn1 = document.createElement('button');
    const btnTxt1 = document.createTextNode('x');
    btn1.appendChild(btnTxt1);
    btn1.className = 'delete-btn';
    newListItem.appendChild(btn1);

    fruits.addEventListener('click',function(event){
      if(event.target.classList.contains('delete-btn')){
        fruits.removeChild(event.target.parentElement);
      }
    })
  })
  
// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById('filter');

filter.addEventListener("keyup", function(event) {
    const textEntered = event.target.value.trim().toLowerCase();
    const fruitItems = document.querySelectorAll('.fruit');

    fruitItems.forEach(item => {
        const fruitName = item.firstChild.textContent.trim().toLowerCase();
        const descPara = item.querySelector('.descPara');

        // Check if the fruit name or description (if available) matches the search text
        const isNameMatch = fruitName.includes(textEntered);
        const isDescMatch = descPara ? descPara.textContent.trim().toLowerCase().includes(textEntered) : false;

        // Display or hide the fruit item based on the search criteria
        if (isNameMatch || isDescMatch) {
            item.style.display = 'flex'; // Display the fruit item
        } else {
            item.style.display = 'none'; // Hide the fruit item
        }
    });
});
