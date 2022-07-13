let arrayProductos=[];
let arrayCarrito =[];
let monto = 0


//Declaro mi constructor de productos.

class Producto{
    constructor(nombre, precio, stock) {
        this.precio = precio;
        this.stock = stock;
        this.nombre = nombre;
    }
}

//Declaro mi carrito de compras

class Carrito{
    constructor(nombre, precio) {
        this.precio = precio;
        this.nombre = nombre;
    }
}

arrayCarrito.push("cacao en polvo",100);
console.log(arrayCarrito);

//Armo mi funcion de calcular compra

function calculaCompra(){
        for (let index = 0; index <= arrayCarrito.length; index++) {
        monto+= arrayCarrito[index].precio;
        }
        return monto;
    }

//Declaro mis productos dentro del arrayProductos

arrayProductos[1]= new Producto("Paquete de café de 1kg",1200,"dispoble");
arrayProductos[2]= new Producto("Paquete de azucar de 1kg",120,"dispoble");
arrayProductos[3]= new Producto("Caja de te x 50 sobres",165,"dispoble");


//Utilizo find() (Busco elementos en el arrayProductos)

let busqueda = arrayProductos.find((producto) => Producto.nombre === "Paquete de café de 1kg");
console.log(busqueda);

//Utilizo el metodo filter() (Filtro elementos en el arrayProductos)

let filtrar = arrayProductos.filter((producto) => Producto.precio >165);
console.log(filtrar);


//Utilizo desafio complementario modificado con las opciones de pago en efectivo o con tarjeta

let total = ""
let cantidadDeCuotas = ""
let medioDePago = prompt(`Ingrese medio de pago: 
efectivo;
con tarjeta;`)
let cuponDeDescuento = (prompt(`Ingrese cupon de descuento: `))
let listado = ""

switch (medioDePago.toLowerCase()) {
    case "efectivo":
        if(cuponDeDescuento.toLowerCase() !== "promo1"){
            total = monto;
            alert(`Total de su compra es: ${total}`);
            break;
        } else{
            total = monto-100;
            alert(`Total de su compra es: ${total}`);
            break;
        }
    case "con tarjeta":
        for (let i = 1; i<=4; i++){
            total = monto/(i*3);
            listado += `En ${i*3} cuotas de $${total} cada una` + "\n";
        }
        alert(listado);
        alert (cuotas(parseInt(prompt(`Ingrese la cantidad de cuotas:
3 cuotas;
6 cuotas;
9 cuotas;
12 cuotas;`))));
break;
    default: alert(`No ingreso metodo de pago`);
    alert(medioDePago);
        break;
}

function cuotas(cantidadDeCuotas) {
    switch (cantidadDeCuotas) {
        case 3:
            return alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + monto / 3);
            break;
        case 6:
            return alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` +  monto / 6);
            break;
        case 9:
            return alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + monto / 9);
            break;
        case 12:
            return alert(`En ${cantidadDeCuotas} cuotas el valor de cada cuota es de: $` + monto / 12);
            break;
        default:
            alert(`No ingresó cantidad de cuotas validados.`);
            alert (cuotas(parseInt(prompt(`Ingrese la cantidad de cuotas:
    3 cuotas;
    6 cuotas;
    9 cuotas;
    12 cuotas;`))));
    break;
    }
}
