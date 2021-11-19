const db = require("./firebase.js");

//Mostrar categorías
function getCategorias(callback){
	return db.collection("Categorias").get()
		.then((response) => {
			var arrayCategorias = [];
			response.forEach((doc) =>{
				arrayCategorias.push(doc.data());
			})
			callback(arrayCategorias);
		})
		.catch(erro => {
			callback(`Error para obtener Categorias ${err}`);
		})
}

//Mostrar categoria
function getCategoria(id, callback) {
    return db.collection('Categorias').doc(id).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error al obtener categoria ${err}`);
        })
}

//Agregar categoria
function addCategoria(categoria, callback) {
    return db.collection('Categorias').add(categoria)
        .then(() => {
            callback("Categoria creada")
        })
        .catch((err) => {
            callback(`Error al agregar categoria ${err}`);
        })
}

//Actualizar categoria
function updateCategoria(id, categoria, callback) {
    return db.collection('Categorias').doc(id).update(categoria)
        .then(() => {
            callback("Categoria actualizada ");
        })
        .catch((err) => {
            callback(`Error al actualizar categoria ${err}`);
        })
}

module.exports = {
	getCategorias,
	addCategoria,
	updateCategoria,
	getCategoria
}