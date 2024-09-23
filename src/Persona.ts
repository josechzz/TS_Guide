export default abstract class Persona{
    // Atributos de la clase protected para que solo se puedan acceder desde las clases hijas
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    // Constructor para inicializar los atributos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para validar edad
    validarEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} no es mayor de edad`);
        }
    }

    // Método abstracto para mostrar todos los datos personales
    abstract mostrarDatos():void;
}