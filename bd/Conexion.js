const admin=require("firebase-admin");
const keys=require("../keys.json");


admin.initializeApp({
    credential:admin.credential.cert(keys)
});

const bd=admin.firestore();
const usuariosBD=bd.collection("miejemplBD");
const productosBD=bd.collection("producto");
const ventasBD = bd.collection("ventas");

module.exports = {
    usuariosBD,
    productosBD,
    ventasBD
}