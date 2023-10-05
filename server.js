const express = require("express");
const app = express();
const db = require("./db");
const HOST = 'http://localhost';
const PORT = 4001;
app.use(express.json());


app.get("/", (req, res)=>{
    //res.send("Mi servidor");
    db.then(async (db)=>{
        console.log("Base de datos conectada");
        const collection = db.collection("usuarios");
        //collection.insertOne({"name": "Alejandro", "rol": "estudiante", "clase": "express js"});
        //collection.updateOne({"name": "Alejandro"}, {$set:{"rol" : "mentor"}});
        //collection.deleteOne({"name": "Alejandro"});
        //query por separado para separar la logica y no hacer lo que hice en los comentarios de arriba 
        const query = {"name": "Alejandro"} 
        // ,  "rol": "estudiante", "clase": "express.js"}
        const lista = await collection.findOne(query);
        //const lista = await collection.find().toArray();
        console.log(lista);
        res.send(lista);
    });
});



app.listen(PORT,()=>{
    console.log(`${HOST}:${PORT}`);
});