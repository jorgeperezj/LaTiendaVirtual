import axios from "axios";

var url = "http://localhost:5000/productos/";


function getProductos(callback) {
    axios.get(url)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}

function searchProductos(callback) {
    axios.get("http://localhost:5000/searchProductos/")
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}

function addProducto(id, producto, callback) {
    axios.post(url + id, producto)
    .then((res) => {
        callback(res.data);
    })
    .catch((err) => {
        callback(err);
    })
}

function updateProducto(id, producto, callback) {
    axios.patch(url + id, producto)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}

export {
    getProductos,
    addProducto,
    updateProducto,
    searchProductos
}




