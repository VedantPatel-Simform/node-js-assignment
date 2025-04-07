const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/create-file", (req, res) => {
  fs.writeFile("example.txt", "Hello, this is a new file!", (err) => {
    if (err) return res.send("Error creating file.");
    res.send("File created successfully!");
  });
});

app.get("/read-file", (req, res) => {
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) return res.send("Error reading file.");
    res.send(`File content: ${data}`);
  });
});

app.get("/write-file", (req, res) => {
  fs.writeFile("example.txt", "This is new content!", (err) => {
    if (err) return res.send("Error writing file.");
    res.send("File overwritten successfully!");
  });
});

app.get("/append-file", (req, res) => {
  fs.appendFile("example.txt", "\nThis text is appended.", (err) => {
    if (err) return res.send("Error appending to file.");
    res.send("Text appended successfully!");
  });
});

app.get("/stream-file", (req, res) => {
  const readStream = fs.createReadStream("example.txt", "utf8");
  readStream.pipe(res);
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.send("Error: No file selected!");
  }
  res.send(`File uploaded: ${req.file.filename}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
