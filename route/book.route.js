import express from "express";
import { getBook, uploadBook } from "../controller/book.controller.js";
import multer from "multer"; // Import multer

const router = express.Router();

// Configure storage settings for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // The folder to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Store file with its original name
    }
});

const upload = multer({ storage }); // Initialize multer with the storage configuration

router.get("/", getBook);
router.post("/", upload.single('image'), uploadBook); // Use multer for image upload

export default router;
