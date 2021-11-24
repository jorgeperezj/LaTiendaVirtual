const express = require("express");
const app = express();
const port = 3000;
const dbC = require("./src/db/crudCategorias.js");
const dbP = require("./src/db/crudProductos.js");

// app.use(express.static("public"));
app.use(express.json());

//Index app
app.get("/", function(req, res){
	res.send("Index del la tienda virtual");
});



//Categorías
app.get("/categorias", function(req, res){
    dbC.getCategorias(function(arrayCategorias){
        res.send(arrayCategorias);
    })
});

app.get('/categorias/:id', function(req, res){
    const id = req.params.id;
    dbC.getCategoria(id, function(categoria){
        res.json(categoria);
    })
})

app.post('/categorias',(req, res)=>{
    const categoria = req.body;
    dbC.addCategoria(categoria, function(response){
        res.send(response);
    })
})

app.patch('/categorias/:id', (req, res)=>{
    const id = req.params.id;
    const categoria = req.body;
    dbC.updateCategoria(id, categoria, function(response){
        res.send(response);
    })
})

//Productos
app.get("/productos", function(req, res){
    dbP.getProductos(function(arrayProductos){
        res.send(arrayProductos);
    })
});

app.get('/productos/:id', function(req, res){
    const id = req.params.id;
    dbP.getProducto(id, function(producto){
        res.json(producto);
    })
})

app.post('/productos',(req, res)=>{
    const producto = req.body;
    dbP.addProducto(producto, function(response){
        res.send(response);
    })
})

app.patch('/productos/:id', (req, res)=>{
    const id = req.params.id;
    const producto = req.body;
    dbP.updateProducto(id, producto, function(response){
        res.send(response);
    })
})

app.listen(port, () => {
    console.log("My port " + port);
});