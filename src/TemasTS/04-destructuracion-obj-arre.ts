interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:"Mess",
    detalles:{
        autor:"Ed sheerean",
        anio:2015
    }
}

console.log('El volumen actual es: ',reproductor.volumen)
console.log('El segundo actual es: ',reproductor.segundo)
console.log('La cancion actual es: ',reproductor.cancion)
console.log("El autor es:",reproductor.detalles.autor)
console.log("El anio es:",reproductor.detalles.anio)
//-------------Destructuracion de objetos-------------//
const{volumen,segundo,cancion,detalles}=reproductor;
const {autor,anio}=detalles;
console.log("El volumen actual es:",volumen);
console.log("El segundo actual es:",segundo);
console.log("La cancion actual es:",cancion);
console.log("El autor es:",autor);
console.log("El anio es:",anio);
//-------------Destructuracion de areglos-------------//
const dbz:string[]=["Goku","Vegeta","Trunks"];
const[p1,p2,p3]=dbz;
console.log("personaje 1:",p1)
console.log("personaje 2:",p2)
console.log("personaje 3:",p3)




