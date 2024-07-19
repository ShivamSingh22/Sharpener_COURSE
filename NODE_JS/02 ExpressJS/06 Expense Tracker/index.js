function handleFormSubmit(event) {
    event.preventDefault();

    const amount = event.target.expense.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const obj = {
        amount: amount,
        description: description,
        category: category
    };

    axios
    .post('http://localhost:7000/',obj)
    .then((res)=>{
        console.log(res.data.newExp);
        displayExpenseList(res.data.newExp);
    })

    event.target.reset();
}

function displayExpenseList(expenseDetails) {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';
        li.innerHTML=`${expenseDetails.amount} - ${expenseDetails.category} - ${expenseDetails.description}`;
        ul.appendChild(li);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        

        editBtn.addEventListener('click', () => {
            deleteExpense(expenseDetails.id,li);
            document.getElementById('expense').value = expenseDetails.amount;
            document.getElementById('description').value = expenseDetails.description;
            document.getElementById('category').value = expenseDetails.category;
        });

        deleteBtn.addEventListener('click', () => {
          
            deleteExpense(expenseDetails.id,li); 
        });
    
}

function deleteExpense(id,listItem){
    axios
    .delete(`http://localhost:7000/${id}`)
    .then((res)=>{
        console.log("Item Deleted");
        listItem.remove();
    })
    .catch(err=>console.log(err))
}

window.addEventListener("DOMContentLoaded",()=>{
        axios
        .get('http://localhost:7000/')
        .then((res)=>{
            const prevData = res.data.prevData;
            for(i=0;i<prevData.length;i++){
                displayExpenseList(prevData[i]);
            }
        })
        .catch(err=>console.log(err))
})




