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
    const { name, price, category, title } = req.body; // Extract data from request body

    // Validate that an image is provided
    if (!req.file) {
        return res.status(400).json({ message: "Image file is required" });
    }

    // Create a new book instance with binary image data
    const newBook = new Book({
        name,
        price,
        category,
        title,
        image: req.file.buffer, // Store binary image data
        contentType: req.file.mimetype, // Store the MIME type of the image
    });

    try {
        const savedBook = await newBook.save(); // Save to the database
        res.status(201).json(savedBook); // Respond with the saved book
    } catch (error) {
        console.error("Error saving book: ", error);
        res.status(500).json({ message: "Error saving book", error });
    }
};
