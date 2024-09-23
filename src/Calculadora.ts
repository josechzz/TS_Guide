export default class Calculadora {

    // Método sumar
    sumar(num1: number, num2: number): void {
        let suma = num1 + num2;
        console.log(`La suma de ${num1} + ${num2} es: ${suma}`);
    }

    // Método Restar
    restar(num1: number, num2: number): void {
        let resta = num1 - num2;
        console.log(`La resta de ${num1} - ${num2} es: ${resta}`);
    }

    // Método Multiplicar
    multiplicar(num1: number, num2: number): void {
        let multiplicacion = num1 * num2;
        console.log(`La multiplicación de ${num1} * ${num2} es: ${multiplicacion}`);
    }

    // Método Dividir
    dividir(num1: number, num2: number): void {
        if (num2 === 0) {
            throw new Error("No se puede dividir por cero");
        }
        let division = num1 / num2;
        console.log(`La División de ${num1} / ${num2} es: ${division}`);
    }

    // Método calcular Potencia
    potencia(base: number, exponente: number): void {
        let potencia = Math.pow(base, exponente);
        console.log(`La potencia de ${base} ^ ${exponente} es: ${potencia}`);
    }

    // Método calcular factorial
    factorial(num: number): void {
        let factorial: number;
        // Evaluamos que el numero sea positivo
        if (num < 0) {
            throw new Error("No se puede calcular el factorial de un número negativo");
        } else if (num === 0 || num === 1) {
            factorial = 1;
        } else {
            factorial = 1;
            for (let i = 2; i <= num; i++) {
                factorial *= i;
            } 
        }
        
        console.log(`El factorial de ${num}! es: ${factorial}`);
    }
}