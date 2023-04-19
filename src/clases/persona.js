export default class Persona {
    constructor(pNombre, sNombre, pApellido, sApellido, fecNac, estadoCivil, padres, hijos, ident) {
        this.primerNombre = pNombre
        this.segundoNombre = sNombre
        this.primerApellido = pApellido
        this.segundoApellido = sApellido
        this.fechaNacimiento = fecNac
        this.estadoCivil = estadoCivil
        this.padresFamilia = padres
        this.hijos = hijos
        this.identidad = ident
    }
}


// export default class Persona {
//     constructor(pNombre, sNombre, pApellido, sApellido, fecNac, estadoCivil, padres, hijos, ident) {
//         this.primerNombre = pNombre
//         this.segundoNombre = sNombre
//         this.primerApellido = pApellido
//         this.segundoApellido = sApellido
//         this.fechaNacimiento = fecNac
//         this.estadoCivil = estadoCivil
//         this.padresFamilia = padres
//         this.hijos = hijos
//         this.identidad = ident
//     }

//     /**
//      * Metodo encargado de mostrar el fin de la clase
//      */
//     static informacionClasePerson() {
//         return 'Esta es la clase para mostrar diferentes procesos de la clase persona'
//     }

//     /**
//      * Metodo Get encargado de retornar el nombre de la persona
//      */
//     get nombreCompleto() {
//         let nombreAll = ''
//         if (this.primerNombre !== undefined && this.primerNombre !== null && this.primerNombre.trim() !== '') {
//             nombreAll += this.primerNombre
//         }
//         if (this.segundoNombre !== undefined && this.segundoNombre !== null && this.segundoNombre.trim() !== '') {
//             nombreAll += ' ' + this.segundoNombre
//         }
//         if (this.primerApellido !== undefined && this.primerApellido !== null && this.primerApellido.trim() !== '') {
//             nombreAll += ' ' + this.primerApellido
//         }
//         if (this.segundoApellido !== undefined && this.segundoApellido !== null && this.segundoApellido.trim() !== '') {
//             nombreAll += ' ' + this.segundoApellido
//         }
//         if (nombreAll === '') {
//             nombreAll = 'No ingreso el Nombre de la persona'
//         }
//         return nombreAll
//     }

//     /**
//      * Metodo GET retornar los apellidos de la persona
//      */
//     get llamarApellidos() {
//         let apellidos = ''
//         if (this.primerApellido !== undefined && this.primerApellido !== null && this.primerApellido.trim() !== '') {
//             apellidos += this.primerApellido
//         }
//         if (this.segundoApellido !== undefined && this.segundoApellido !== null && this.segundoApellido.trim() !== '') {
//             apellidos += ' ' + this.segundoApellido
//         }
//         return apellidos
//     }
// }