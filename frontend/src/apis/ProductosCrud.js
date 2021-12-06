import axios from "axios";

var url = "http://localhost:5000";


function getProductos(callback) {
    axios.get(url + "/productos/")
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}

function addProducto(id, producto, callback) {
    axios.post(url + "/productos/" + id, producto)
    .then((res) => {
        callback(res.data);
    })
    .catch((err) => {
        callback(err);
    })
}

function updateProducto(id, estado, callback) {
    axios.patch(url + id, estado)
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
    updateProducto
}




