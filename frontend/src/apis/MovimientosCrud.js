import axios from "axios";
var url = "http://localhost:5000/movimientos/";

function getMovimientos(callback) {
    axios.get(url)
        .then((res) => {
            callback(res.data);
        })
        .catch((err)=>{
            callback(err);
        })
}

function addMovimiento(movimiento, callback) {
    axios.post(url, movimiento)
    .then((res) => {
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export {
    getMovimientos,
    addMovimiento
}