const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect("mongodb+srv://jigarpatel2880:1W1fs0UEMGHowJwh@cluster0.5enxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema for storing image metadata
const imageSchema = new mongoose.Schema({
    name: String,
    image: {
        data: Buffer,
        contentType: String,
    },
});

const Image = mongoose.model("Image", imageSchema);

// Set up Multer for file storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to save an image
app.post("/saveImage", upload.single("image"), async (req, res) => {
    try {
        const newImage = new Image({
            name: req.file.originalname,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            },
        });
        await newImage.save();
        res.status(200).json({ message: "Image saved successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to save image." });
    }
});

// Route to fetch all images (optional)
app.get("/images", async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch images." });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
