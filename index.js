let comprar = ()=>{
    let totalApagar = 0;
    let variable = Number(prompt("¿Cuantos productos vas a comprar?"));
    for(let i = 1; i<= variable ; i++){
    const nombre = prompt("¿Qué producto deseas llevar");
    const cantidad = Number(prompt("¿Cuantas unidades?"));
    const precio = Number(prompt("¿Cuanto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar += subtotal;
    }
    console.log(totalApagar);
    return totalApagar
}

const total = comprar() + comprar() + comprar();
alert("El total a pagar es " + total)