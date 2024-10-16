var ruta = require("express").Router();
var {mostrarVentas,nuevaVenta,cancelarVenta,buscarPorId}=require("../bd/ventas");

ruta.get("/mostrarVentas",async(req,res)=>{
    const ventas=await mostrarVentas();
    res.json(ventas);
});

ruta.get("/buscarPorId/:id", async(req, res)=>{
    var ventaValida= await buscarPorId(req.params.id);
    res.json(ventaValida);
});

ruta.patch("/cancelarVenta/:id",async(req,res)=>{
    var cancelado=await cancelarVenta(req.params.id);
    res.json(cancelado);
});

ruta.post("/nuevaVenta",async(req,res)=>{
    var ventaValida = await nuevaVenta(req.body);
    res.json(ventaValida);
})

module.exports=ruta;