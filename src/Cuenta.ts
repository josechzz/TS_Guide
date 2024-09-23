export default class Cuenta {
    // Atributos de la clase
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: number;

    // Constructor para inicializar los atributos
    constructor(nombre:string, cantidad:number, tipoCuenta:string, numeroCuenta:number){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    // Método depositar
    depositar(): void {
        // Validamos que el valor a depositar sea mayor a $5.00
        if (this.cantidad < 5.00) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            console.log(`Se ha depositado correctamente la cantidad de: $${this.cantidad.toFixed(2)}`);
        }
    }

    // Método retirar
    retirar(valor: number): void {
        // Validamos que el valor a retirar sea mayor a $5.00
        if (valor > 5.00) {
            // Validamos que la cantidad en la cuenta sea mayor al valor a retirar
            if (this.cantidad >= valor) {
                let saldo = this.cantidad - valor;
                console.log(`Se ha retirado: $${valor.toFixed(2)}`);
                console.log(`Nuevo saldo disponible: $${saldo.toFixed(2)}`);
            } else {
                console.log("No hay efectivo suficiente para retirar");
            }
        } else {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
    }

    // Método para mostrar los datos de la cuenta
    mostrarCuenta(): void {
        console.log("Datos de la Cuenta");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
        console.log(`Número de Cuenta: ${this.numeroCuenta}`);
    }
}