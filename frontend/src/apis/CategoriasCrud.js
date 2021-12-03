import axios from "axios";
var url = "http://localhost:5000";

function getCategorias(callback) {
    axios.get(url + "/categorias")
        .then((res) => {
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

function addCategoria(id, categoria, callback) {
    axios.post(url + "/categorias/" + id, categoria)
    .then((res) => {
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export {
    getCategorias,
    addCategoria
}