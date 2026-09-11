class persona{
    nombre:string
    edad:number

    constructor(nombre:string, edad:number){
        this.nombre=nombre
        this.edad=edad
    }

    imprimir(){
        console.log(`Hola me llamo ${this.nombre} Y
            tengo ${this.edad}años`)
    }
}
let personas:persona
persona=new persona("Mario",22)
persona.imprimir()


