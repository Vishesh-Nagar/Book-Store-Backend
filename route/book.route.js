import express from "express";
import { getBook, uploadBook } from "../controller/book.controller.js";
import multer from "multer"; // Import multer

const router = express.Router();

// Configure multer to store files in memory
const storage = multer.memoryStorage(); // Store file data in memory as a Buffer
const upload = multer({ storage }); // Initialize multer with memory storage

router.get("/", getBook);
router.post("/", upload.single("image"), uploadBook); // Use multer for in-memory uploads

export default router;
