function handleFormSubmit(event) {
    event.preventDefault();

    const amount = event.target.exp.value;
    const description = event.target.desc.value;
    const category = event.target.ctg.value;

    const expenseDetails = {
        amount: amount,
        description: description,
        category: category
    };

    const existingExpenseDetails = JSON.parse(localStorage.getItem('ExpenseDetails')) || [];

    existingExpenseDetails.push(expenseDetails);

    localStorage.setItem('ExpenseDetails', JSON.stringify(existingExpenseDetails));

    displayExpenseList(existingExpenseDetails);

    event.target.reset();
}

function displayExpenseList(expenseDetailsArray) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';

    expenseDetailsArray.forEach(expenseDetails => {
        const li = document.createElement('li');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';

        editBtn.addEventListener('click', () => {

            ul.removeChild(li);

            const updatedExpenseDetails = expenseDetailsArray.filter(
                expense => expense.amount !== expenseDetails.amount
            );
            localStorage.setItem('ExpenseDetails', JSON.stringify(updatedExpenseDetails));

            document.getElementById('exp').value = expenseDetails.amount;
            document.getElementById('desc').value = expenseDetails.description;
            document.getElementById('ctg').value = expenseDetails.category;
        });

        deleteBtn.addEventListener('click', () => {
          
            ul.removeChild(li);

            const updatedExpenseDetails = expenseDetailsArray.filter(
                expense => expense.amount !== expenseDetails.amount
            );
            localStorage.setItem('ExpenseDetails', JSON.stringify(updatedExpenseDetails));
        });

        li.textContent = `${expenseDetails.amount} - ${expenseDetails.description} - ${expenseDetails.category}`;
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
}




