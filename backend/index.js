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

// BzP3yHeMypgdq5yr
// Connect to MongoDB
// const DB ="mongodb+srv://jigarpatel2880:1W1fs0UEMGHowJwh@cluster0.5enxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const DB = "mongodb+srv://jigarpatel2880:BzP3yHeMypgdq5yr@cluster0.jzeg3.mongodb.net/"

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define a schema for storing image metadata
const imageSchema = new mongoose.Schema({
    image: String
});

const Image = mongoose.model("Image", imageSchema);

// // Set up Multer for file storage
//     const storage = multer.memoryStorage();
//     const upload = multer({ storage });

// Route to save an image
// app.post("/saveImage", upload.single("image"), async (req, res) => {
//     try {
//         const newImage = new Image({
//             name: req.file.originalname,
//             image: {
//                 data: req.file.buffer,
//                 contentType: req.file.mimetype,
//             },
//         });
//         await newImage.save();
//         res.status(200).json({ message: "Image saved successfully!" });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Failed to save image." });
//     }
// });
app.post("/saveImage", async (req, res) => {
    try {
        const newImage = new Image({
            image: req.body.image
        })
        newImage.save()
        res.status(201).json({ message: "image upload successfully" })
    }
    catch {
        res.status(500).json({ message: "failed to uplad image" })
    }
})
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
