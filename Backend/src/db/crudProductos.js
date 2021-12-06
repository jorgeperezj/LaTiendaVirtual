const db = require("./firebase.js");

//Mostrar Productos
function getProductos(callback){
	return db.collection("Productos").get()
		.then((response) => {
			var arrayProductos = [];
			response.forEach((doc) =>{
				arrayProductos.push(doc.data());
			})
			callback(arrayProductos);
		})
		.catch(erro => {
			callback(`Error para obtener Productos ${err}`);
		})
}

//Mostrar Producto
function getProducto(id, callback) {
    return db.collection('Productos').doc(id).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error al obtener Producto ${err}`);
        })
}

//Agregar Producto
function addProducto(id, producto, callback) {
    return db.collection('Productos').doc(id).set(producto)
        .then(() => {
            callback("Success")
        })
        .catch((err) => {
            callback(`Error al agregar Producto ${err}`);
        })
}

//Actualizar Producto
function updateProducto(id, producto, callback) {
    return db.collection('Productos').doc(id).update(producto)
        .then(() => {
            callback("Producto actualizada ");
        })
        .catch((err) => {
            callback(`Error al actualizar Producto ${err}`);
        })
}

module.exports = {
	getProductos,
	addProducto,
	updateProducto,
	getProducto
}