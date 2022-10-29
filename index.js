const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json())

const myInformation = {
    slackUsername: "6tendev",
    backend: true,
    age: 20,
    bio: "I started coding, i liked it, i want to make money from it"
}

app.get("/", (req, res) => {
    res.status(200).send(myInformation)
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server has started on ${process.env.PORT}`)
});