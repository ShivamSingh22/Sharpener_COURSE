const Book =require('../models/bookModel');
const ReturnedBook =require('../models/returnBookModel');

exports.getBooks = async(req,res,next)=>{
    try {
        const books= await Book.findAll();
        const currentTime= new Date();

    for(let book of books){
        if(book.returnDate<currentTime) {
            const noOfHoursLate = Math.floor((currentTime - book.returnDate) / (1000 * 60 * 60));
            await book.update({ fine: noOfHoursLate * 10 });
        }
    }

        res.json(await Book.findAll());

    } catch (error) {
        res.status(500).json({message: error});
    }
};

exports.postBook = async (req,res,next)=>{
    
    const {bookName} = req.body;
    console.log(req.body);
    const currentTime =new Date();
    const returnDate = new Date(currentTime.getTime() + 60*60*1000);

    try {
        const newBook = await Book.create({
            bookName:bookName,
            returnDate:returnDate
        });

        res.status(201).json(newBook);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.returnBook = async (req, res) => {
    const bookId = req.params.id;

    try {
        const book = await Book.findByPk(bookId);
        if (book) {
            const returnedAt = new Date();
            await ReturnedBook.create({
                bookName: book.bookName,
                fine: book.fine,
                returnedAt:returnedAt
            });
            await book.destroy();
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getReturnedBooks = async (req, res) => {
    try {
        const returnedBooks = await ReturnedBook.findAll();
        res.json(returnedBooks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};