const bebidas = [
    {id:1, nombre:"Coca Cola", precio:1800},
    {id:2, nombre:"Pepsi", precio:1700},
    {id:3, nombre:"Manaos", precio:1500}
]; // Catalogo Inicial

// ABM de Productos
class Productos {
    constructor(productos) {
        this.items = productos;
    }

    agregarProducto(nombreP, precioP) {
        const producto = {id:this.generarId(), nombre:nombreP, precio:precioP}; // Crear un nuevo objeto Producto
        this.items.push(producto); // Agregando al Array items de la Clase Producto, el nuevo objeto Producto creado
        console.log("Producto agregado!");
    }

    buscarProducto(id) {
        return this.items.find(item => item.id == id)
    }

    obtenerProductos() {
        return this.items;
    }

    listarProductos() {
        let salida = "";

        for (const producto of this.items) {
            salida += `${producto.id} - ${producto.nombre} $${producto.precio}\n`;
        }

        alert(salida);
    }

    totalProductos() {
        return this.items.length;
    }

    /* generarId() { // Sirve este metodo siempre y cuando no se eliminen productos
        return this.items.length + 1; //Cantidad de Productos de mi Array + 1
    } */

    generarId() {
        let max = 0;

        this.items.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    eliminarProducto(id) {
        // Opción #1 - Eliminar con método splice
        let pos = this.items.findIndex(item => item.id == id); // Busqué la posición del elemento a eliminar en el array items (2)
        this.items.splice(pos, 1); // Eliminar el elemento de la posición "pos"
        
        // Opción #2 - Eliminar con método filter
        //this.items = this.items.filter(item => item.id != id); // Eliminar el elemento de la posición "pos"
        
        console.log("Se eliminó el Producto: #" + id);
    }
}

// Crea una nueva instancia de la Clase Productos
const catalogo = new Productos(bebidas)

//let nombreProducto = prompt("Ingrese el Nombre del Producto:"); //Seven Up
//let precioProducto = parseFloat(prompt("Ingrese el Precio del Producto:")); //1600
//catalogo.agregarProducto(nombreProducto, precioProducto); //Seven Up, 1600

// Agregar Productos
catalogo.agregarProducto("Cunnington Cola", 1900);
catalogo.agregarProducto("Sprite", 1800);
catalogo.agregarProducto("Pretty", 1400);
console.log(catalogo.obtenerProductos());

// Eliminar Producto
catalogo.eliminarProducto(3);

// Agrego Productos
catalogo.agregarProducto("Pretty Naranja", 1400);
console.log(catalogo.eliminarProducto(3));
catalogo.agregarProducto("Pretty Pomelo", 1400);

// Obtengo el array de productos
console.log(catalogo.obtenerProductos());

//let producto = catalogo.buscarProducto(4)
//alert(producto.nombre + " $" + producto.precio);

// Listar los Productos
catalogo.listarProductos();

// Cuantos productos tiene mi Catalogo?
console.log("Total Productos: " + catalogo.totalProductos());