const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = "mongodb://127.0.0.1:27017/Streamplay_db";
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
});

const usersRouter = require("./routes/users");
const videosRouter = require("./routes/videos");

// app.get('/myGame', (req, res) => {
//     res.sendFile('C:\\Users\\AMAN\\Desktop\\Files_Shortcuts\\NIT AP\\3rd year sem 2\\Web Development\\Website Code\\my-app\\src\\static\\8Puzzle.html');
//   });


app.use('/users', usersRouter);
app.use('/videos', videosRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});