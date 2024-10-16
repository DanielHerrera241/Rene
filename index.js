const express = require("express");
const usuariosRutas=require("./rutas/rutasUsuarios");
const productosRutas=require("./rutas/rutasProductos");
const productosVentas=require("./rutas/rutasVentas");

const app=express();{
app.use(express.urlencoded({extended:true}));//decir que vamos a aceptar datos de un formulario
app.use(express.json());
app.use("/usu",usuariosRutas);//aqui se dice que se va usar app desde donde y que ruta usar
app.use("/pro",productosRutas);
app.use("/ve",productosVentas);

}

const port=process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port);
});