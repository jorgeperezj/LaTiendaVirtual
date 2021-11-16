const db = require("./firebase.js");

//Mostrar todas las categorías
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

//Agregar una categoria
function addCategoria(categoria, callback) {
    return db.collection('Categorias').add(categoria)
        .then(() => {
            callback("Categoria created")
        })
        .catch((err) => {
            callback(`Error to add categoria ${err}`);
        })
}

module.exports = {
	getCategorias,
	addCategoria
}