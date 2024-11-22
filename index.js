const express = require("express");
const adventures = require("./json/adventures.json");
const featuredAdventures = require("./json/featuredAdventures.json");
const testimonials = require("./json/testimonials.json");
const app = express();
const cors = require('cors')
const port = 3000;

app.use(cors());

// app.use(cors({
//     origin: "http://localhost:5173",
//   }));

app.get("/", (req, res) => {
    res.sent("This Is Home Page.");
    res.sent(`Adventures API ${`https://eco-adventure-experiences-api.vercel.app/adventures`}`);

    res.sent(`Adventures Details API ${`https://eco-adventure-experiences-api.vercel.app/adventures/2`}`);

    res.sent(`FeaturedAdventures Details API ${`https://eco-adventure-experiences-api.vercel.app/featuredAdventures`}`);

    res.sent(`Testimonials Details API ${`https://eco-adventure-experiences-api.vercel.app/testimonials`}`);
});

app.get("/adventures", (req, res) => {
    res.send(adventures);
});

app.get("/adventures/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const adventure = adventures.find((adventure) => adventure.id === id);
    res.send(adventure);
});

app.get("/featuredAdventures", (req, res) => {
    res.send(featuredAdventures);
});

app.get("/testimonials", (req, res) => {
    res.send(testimonials);
});

app.listen(port, () => {
    console.log(`🌟 My listening port ${port}`);
});
