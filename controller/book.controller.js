import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Error fetching books", error });
    }
};

export const uploadBook = async (req, res) => {
    const { name, price, category, title } = req.body; // Extract data from request body
    const image = req.file.path; // Get the path to the uploaded image

    const newBook = new Book({ name, price, category, image, title }); // Create a new book instance

    try {
        const savedBook = await newBook.save(); // Save to the database
        res.status(201).json(savedBook); // Respond with the saved book
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Error saving book", error });
    }
};
