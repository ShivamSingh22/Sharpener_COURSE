// Write your code below:
const ele=document.createElement('h3');
const txt=document.createTextNode('Buy high quality organic fruits online');
ele.appendChild(txt);

const dibba=document.getElementsByTagName('div');
const firstDiv=dibba[0];
firstDiv.appendChild(ele);

ele.style.fontStyle='italic';

const ele2=document.createElement('p');
const txt2=document.createTextNode('Total fruits:4');
ele2.appendChild(txt2);
ele2.id='fruits-total';

const secondDiv=dibba[1];

const ul=document.querySelector('.fruits');

secondDiv.insertBefore(ele2,ul)