import axios from "axios";
var url = "http://localhost:5000";

function getCategorias(callback) {
    axios.get(url + "/categorias")
        .then((res) => {
            callback(res);
        }).catch((err) => {
            console.log(err);
        })
}

export {
    getCategorias
}