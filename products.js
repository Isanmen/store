const product1 = {
    nombre: "celular",
    precio: 10000,
    stock: 2,
};
console.log(product1);
product1.id = "id123";
product1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

console.log(product1.nombre);

class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
    }

    get supplier(){
        return this._supplier;
    };
    set supplier(newSupplier){
        this._supplier = newSupplier;
    }

    sellUnits(units){
        if(units > this.stock){
            console.log("No hay suficiente stock")
            return;
        }
        this.stock = this.stock - units
    }

}

const prod1 = new Product();
const prod2 = new Product("0002", "laptop", 10000, 5, "https://falabella.scene7.com/is/image/FalabellaPE/882958599_1?wid=1500&hei=1500&qlt=70")
const prod3 = new Product("0003", "tablet", 5000, 12, "https://plazavea.vteximg.com.br/arquivos/ids/28790986-1000-1000/imageUrl_1.jpg", true);
const prod4 = new Product("0004", "Macbook Pro", 12000, 3, "https://http2.mlstatic.com/D_NQ_NP_899761-MPE74254568478_022024-O.webp", true, "Plaza Vea")
const prod5 = new Product("0005", "SmartWatch", 3000, 12, "https://falabella.scene7.com/is/image/FalabellaPE/gsc_127710461_4943091_1?wid=1500&hei=1500&qlt=70", true, "Saga")

prod4.supplier = "Apple store";
console.log(`El proveedor del producto 4 es: ${prod4.supplier}`);

prod5.sellUnits(10);
prod5.sellUnits(5);

console.log(prod1)
console.log(prod2)
console.log(prod3)
console.log(prod4)
console.log(prod5)

console.log(prod1, prod2, prod3);
console.log(`nombre del título: ${prod2.title}`);
console.log(`Está on sale: ${prod3["onsale"]}`);
