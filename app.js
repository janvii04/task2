const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 4000;

// Set up storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to file name
    }
});

// Initialize multer with the defined storage
const upload = multer({ storage: storage });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve uploaded files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Handle file uploads
app.post('/profileUpload', upload.array('profile-files', 12), (req, res) => {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    }

    let response = '<a href="/">Home</a><br>';
    response += "Files uploaded successfully.<br>";
    req.files.forEach(file => {
        response += `<img src="/uploads/${file.filename}" style="width:200px;" /><br>`;
    });
    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
