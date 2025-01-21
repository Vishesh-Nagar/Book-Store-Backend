import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    author: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;