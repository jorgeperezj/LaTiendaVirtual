const express = require("express");
const app = express();
const port = 3000;
const db = require("./src/db/crudCategorias.js");

// app.use(express.static("public"));
app.use(express.json());

//Index app
app.get("/", function(req, res){
	res.send("Index del la tienda virtual");
});



//Categorías
app.get("/categorias", function(req, res){
    db.getCategorias(function(arrayCategorias){
        res.send(arrayCategorias);
    })
});

app.get('/categoria/:id', function(req, res){
    const id = req.params.id;
    db.getCategoria(id, function(categoria){
        res.json(categoria);
    })
})

app.post('/categorias',(req, res)=>{
    const categoria = req.body;
    db.addCategoria(categoria, function(response){
        res.send(response);
    })
})

app.patch('/update-categoria/:id', (req, res)=>{
    const id = req.params.id;
    const categoria = req.body;
    db.updateCategoria(id, categoria, function(response){
        res.send(response);
    })
})

app.listen(port, () => {
    console.log("My port " + port);
});