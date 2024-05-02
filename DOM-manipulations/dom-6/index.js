const temp=document.querySelector('#basket-heading');
temp.style.color='brown';


let list1=document.querySelectorAll('.fruit:nth-child(even)');

for(let i=0;i<list1.length;i++){
 
    list1[i].style.backgroundColor='brown';
    list1[i].style.color='white';
  
}