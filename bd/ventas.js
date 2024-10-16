const { ventas } = require("./conexion");
const Venta = require("../clases/ventasClases");

// Función para validar si los datos de la venta son correctos
function validarDatos(venta2) {
    var datosCorrectos = false;
    if (venta2.status !== undefined && 
        venta2.cantidad !== undefined && 
        venta2.fechayhora !== undefined &&  
        venta2.nombreUsuario !== undefined && 
        venta2.nombreProducto !== undefined) {
        datosCorrectos = true;
    }
    return datosCorrectos;
}

// Función para mostrar todas las ventas
async function mostrarVentas() {
    const ventasSnapshot = await ventas.get(); // Cambiado a ventasSnapshot
    var ventasValidas = [];
    ventasSnapshot.forEach(venta => {
        const venta1 = new Venta({ id: venta.id, ...venta.data() });
        const venta2 = venta1.getVenta;
        if (validarDatos(venta2)) {
            ventasValidas.push(venta2);
        }
    });
    return ventasValidas;
}

// Función para buscar una venta por su ID
async function buscarPorId(id) {
    const venta = await ventas.doc(id).get();
    const venta1 = new Venta({ id: venta.id, ...venta.data() });
    var ventaValida = { error: true };
    if (validarDatos(venta1.getVenta)) {
        ventaValida = venta1.getVenta;
    }
    return ventaValida;
}

// Función para crear una nueva venta
async function nuevaVenta(data) {
    const venta1 = new Venta(data);
    var ventaValida = false;
    if (validarDatos(venta1.getVenta)) {
        await ventas.doc().set(venta1.getVenta);
        ventaValida = true;
    }
    return ventaValida;
}

// Función para cancelar una venta
async function cancelarVenta(id) {
    const venta = await buscarPorId(id); // Se agregó await aquí
    var cancelada = false;
    if (venta.error !== true) {
        await ventas.doc(id).update({ status: "Cancelada" });
        cancelada = true;
    }
    return cancelada;
}

module.exports = {
    mostrarVentas,
    nuevaVenta,
    cancelarVenta,
    buscarPorId
};
