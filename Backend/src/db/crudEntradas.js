

const db = require("./firebase.js");


//  mostrar entradas
function getEntradas(callback){
    return db.collection("Entradas").get()
        .then((response)=>{
            var arrayEntradas=[];
            response.forEach((doc)=>{
                arrayEntradas.push(doc.data());
            })
            callback(arrayEntradas);
    })
    .catch(erro=>{
        callback(`Error al obtener Entradas ${erro}  `);
    })

}

// añadir entrada
function addEntradas(entrada, callback){
    return db.collection('Entradas').add(entrada)
        .then(()=>{
            callback("Entrada Realizada");
        })
        .catch((err)=>{
            callback(`Error al Crear la Entrada ${err} `)
        })
}

//  actualizar 
function updateEntrada(id,entrada,callback){
    return db.collection('Entradas').doc(id).update(entrada)
        .then(()=>{
               callback("Entrada Actualizada");
        })
        .catch((err)=>{
            callback(`Error al actualizar Entrada ${err}`);
        })
}


module.exports={
    getEntradas,
    addEntradas,
    updateEntrada
}
