const Container = require("./project/contenedor");
const express = require("express");

const port = 8080;

const app = express();
const containerOne = new Container("objetos.txt");


const ConectionServer = app.listen(port,(req,res) =>{
    console.log(`server is litening on port: ${ConectionServer.address().port}`)
})



ConectionServer.on("error",(error) => console.log(`Error in server ${error}`))



app.get("/productos",(req,res) =>{
    totalProducts = containerOne.getAllItems()
    res.send({ totalProducts });
})


app.get("/productoRandom",(req,res) =>{
  randomProduct = containerOne.getRandom()
  res.send(randomProduct);
})






