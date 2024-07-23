document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
    fetchReturnedBooks();
    setInterval(fetchBooks, 60000);//every minute fine update hojayegi
});

async function handleFormSubmit(event) {
    event.preventDefault();
    const bookName = document.getElementById('book-input').value;
    const obj={
        bookName:bookName
    }

    try {
        await axios.post('http://localhost:3000/book', obj);
        fetchBooks();
    } catch (error) {
        console.error(error);
    }
    event.target.reset();
}

async function fetchBooks() {
    try {
        const response = await axios.get('http://localhost:3000/books');
        const books = response.data;
        const container = document.getElementById('container-1');
        container.innerHTML = '';

        books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.dataset.bookId = book.id;
            bookDiv.innerHTML = `
                <p>Book Name: ${book.bookName}</p>
                <p>Book Taken On: ${new Date(book.createdAt).toLocaleString()}</p>
                <p>Book Return Date: ${new Date(book.returnDate).toLocaleString()}</p>
                <p>Fine: ${book.fine}</p>
                <button onclick="returnBook(${book.id}, ${book.fine})">Return</button>
            `;
            container.appendChild(bookDiv);
        });
    } catch (error) {
        console.error(error);
    }
}

async function returnBook(bookId, fine) {
    if (fine === 0) {
        await appendToReturnedBooks(bookId);
    } else {
        const bookDiv = document.querySelector(`div[data-book-id='${bookId}']`);
        bookDiv.innerHTML = `
            <p>Fine: ${fine}</p>
            <button onclick="payFine(${bookId})">Pay Fine</button>
        `;
    }
}

async function payFine(bookId) {
    await appendToReturnedBooks(bookId);
}

async function fetchReturnedBooks() {
    try {
        const response = await axios.get('http://localhost:3000/returned-books');
        const returnedBooks = response.data;
        const ul = document.getElementById('returned-books-list');
        ul.innerHTML = '';

        returnedBooks.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `Book Name: ${book.bookName}, Returned On: ${new Date(book.returnedAt).toLocaleString()}, Fine Paid: ${book.fine}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
}

async function appendToReturnedBooks(bookId) {
    try {
        await axios.post(`http://localhost:3000/return/${bookId}`);
        fetchBooks();
        fetchReturnedBooks();
    } catch (error) {
        console.error(error);
    }
}