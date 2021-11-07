
var admin = require("firebase-admin");

var serviceAccount = require("./latiendavirtual-bd392-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


db.collection("experts").doc("4LyZVH8l30ocWCxphEJN").get()
.then((doc)=>{
    if(doc.exists){
        console.log(doc.data());
    }else{
        console.log("Documento no existe")
    }
})
.catch((error)=>{
    console.log("Error al leer documento ",error);
})
