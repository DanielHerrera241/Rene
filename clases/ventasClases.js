class Venta{
    constructor(data){
        this.id=data.id;
        this.status=data.status;
        this.cantidad=data.cantidad;
        this.fechayhora=data.fechayhora;
        this.nombreUsuario=data.nombreUsuario;
        this.nombreProducto=data.nombreProducto;
    }

    set id(id){
        this._id=id;
    }
    
    set status(status){
        this._status=status;
        }

    set cantidad(cantidad){
        const cantidadRegex = /^\d{4,}$/;
    {
        this._cantidad=cantidad;
        }
    }
    
    set fechayhora(fechayhora){
        this._fechayhora=fechayhora;
    }
    
    set nombreProducto(nombreProducto){
        this._nombreProducto=nombreProducto;
    }

    set nombreUsuario(nombreUsuario){
        this._nombreUsuario=nombreUsuario;
    }

    get id(){
        return this._id;
    
    }
    
    get status(){
        return this._status;
    }
    
    get cantidad(){
        return this._cantidad;
    }
    
    get fechayhora(){
        return this._fechayhora;
    }
    
    get nombreProducto(){
        return this._nombreProducto;
    }

    get nombreUsuario(){
        return this._nombreUsuario;
    }

    get getVenta(){
        const conid={
                id:this._id,
                status:this._status,
                cantidad:this._cantidad,
                fechayhora:this._fechayhora,
                nombreProducto:this._nombreProducto,
                nombreUsuario:this._nombreUsuario
        }
        const sinid={
            status:this._status,
            cantidad:this._cantidad,
            fechayhora:this._fechayhora,
            nombreProducto:this._nombreProducto,
            nombreUsuario:this._nombreUsuario
        }
        if(this.id!=undefined){
            return conid;
        }else{
            return sinid;
        }
    }
    }
    
    module.exports=Venta;