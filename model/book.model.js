import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: Buffer, required: true }, // Binary data for the image
    contentType: { type: String, required: true }, // MIME type for the image (e.g., "image/png")
    author: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
