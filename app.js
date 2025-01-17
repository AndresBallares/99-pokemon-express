const express = require("express");
const req = require("express/lib/request");
const app = express();
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);


app.get("/:verb/:adjective/:noun", (request, response) => {
    const { verb, adjective, noun } = request.params;
    response.send("Congratulations on starting a new project called" + " " + verb + "-"  + adjective  + "-" +  noun  + "!");
});

// app.get("/bugs", (request, response) => {
//     response.send("<h1>99 little bugs in the code</h1>")
// })

app.get("/", (request, response) => {
    response.send("Welcome 99 Pokemon")
})

app.get("/bugs", (request, response) => {
    response.send(`<h1>99 little bugs in the code</h1> <a href="/bugs/101">pull one down, patch it around</a>`)
})

app.get("/bugs/:numberOfBugs", (request, response) => {
    const { numberOfBugs } = request.params
    if(numberOfBugs < 200) {
        response.send(`${numberOfBugs} little bugs in the code 
        <br>
        <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`);
    } else {
        response.send(`Too many bugs!! Start over! <br> <a href="/bugs">Start Over</a>`);

    }
})

app.get("/pokemon", (request, response) => {
    response.send(pokemon)
})

app.get("/pokemon/:indexOfArray", (request, response) => {
    const { indexOfArray } = request.params;
    if(indexOfArray > indexOfArray.length) {
        response.send(`Sorry, no pokemon found at ${indexOfArray}`)
    } else {
        response.send(pokemon[indexOfArray])
    }
})



module.exports = app;