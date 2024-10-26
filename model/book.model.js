import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // Store the image path
    author: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
