function sumar(a:number,b:number):number {
    let res:number=a+b
    //console.log(res)
    return res
    
}

const resultado=sumar(3,5)

console.log(resultado)

//--------------------------------------------------------------------
function multiplicar(n1:number=2,base?:number,n2:number=4):number{
    return n1*n2*base;
}

console.log(multiplicar())
console.log(multiplicar(3))
console.log(multiplicar(3,2))

//-----------------------objeto----------------------//
interface Mascotas {
    nombre: string;
    edad: number;
    raza: string;
    sexo?: string;
    vacunado: boolean;
    mostrarEdad: () => void;
}

function mostrarMacota(mascotas: Mascotas, x: number): void {
    mascotas.edad += x;
    console.log(mascotas);
    mascotas.mostrarEdad();
}

const nuevaMascota: Mascotas = {
    nombre: "firulais",
    edad: 5,
    raza: "pastor aleman",
    vacunado: true,
    mostrarEdad() {
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
    }
};

mostrarMacota(nuevaMascota, 3);