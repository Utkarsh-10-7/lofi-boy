const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 4000;

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('track'), (req, res) => {
  res.json({ filename: req.file.filename, url: `/uploads/${req.file.filename}` });
});

app.get('/tracks', (req, res) => {
  const files = fs.readdirSync(path.join(__dirname, 'uploads'));
  const tracks = files.map(name => ({
    name,
    url: `http://localhost:${PORT}/uploads/${name}`
  }));
  res.json(tracks);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));