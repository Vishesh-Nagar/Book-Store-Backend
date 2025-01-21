import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books: ", error);
        res.status(500).json({ message: "Error fetching books", error });
    }
};

export const uploadBook = async (req, res) => {
    const { name, price, category, title } = req.body;

    const newBook = new Book({
        name,
        price,
        category,
        title,
        image: req.file.buffer,
        contentType: req.file.mimetype,
    });

    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        console.error("Error saving book: ", error);
        res.status(500).json({ message: "Error saving book", error });
    }
};