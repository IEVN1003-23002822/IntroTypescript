export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 1500
};

const table: Producto = {
    desc: "Ipad Air",
    precio: 3500
};

function calcularISV(productos: Producto[]): number {
    let total = 0;
    for (const prod of productos) {
        total += prod.precio;
    }
    return total * 0.15;
}

const articulos = [telefono, table];
const isv = calcularISV(articulos);
console.log("ISV:", isv);

export function calcularISV2(productos: Producto[]): [number, number] {
    let total = 0;
    for (const prod of productos) {
        total += prod.precio;
    }
    return [total, total * 0.15];
}

const [total, isv2] = calcularISV2(articulos);
console.log("Total:", total);
console.log("ISV2:", isv2);