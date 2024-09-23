import Persona from "./Persona";

// La clase Empleado hereda de la clase Persona
export default class Empleado extends Persona {
    private sueldo: number;

    // Constructor 
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    // Método para cargar el sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
    }

    // Implementando el método abstracto que definimos en la clase Persona
    mostrarDatos(): void {
        console.log("Datos del Empleado");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }
}