import express from "express";
import { getBook, uploadBook } from "../controller/book.controller.js";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", getBook);
router.post("/", upload.single("image"), uploadBook);

export default router;