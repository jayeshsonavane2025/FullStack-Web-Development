const express = require("express");

const dotenv= require("dotenv");

const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running successfully");
}); 

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const singlechat = chats.find((c) => c._id === req.params.id);
    res.send(singlechat); // Use res.send(), not req.send()
});

const PORT = process.env.PORT || 5000;


app.listen(5000, console.log(`Server started on PORT ${PORT}`));

