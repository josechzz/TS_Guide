import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
//importar las clases
import { CabeceraPagina } from './CabeceraPagina'
import Calculadora from './Calculadora'
import Cancion from './Cancion'
import Cuenta from './Cuenta'
import Empleado from './Empleado'

/* Ejercicio 1 Cabecera Pagina */

console.log("Ejercicio 1 Cabecera Página");
// Instanciar la clase
let pagina = new CabeceraPagina("Mi página web","LightBlue","Arial");
// Obtener Propiedades
console.log(pagina.obtenerPropiedades());
// Establecer Alineación del titulo
pagina.establecerAlineacion("centrado");
// Obtener todas las Propiedades
pagina.imprimirPropiedades();

/* Ejercicio 2 Calculadora */

console.log("");
console.log("Ejercicio 2 Calculadora");
// Instanciar la clase
let calc = new Calculadora;
// Probando las operaciones
calc.sumar(6,4);
calc.restar(6,4);
calc.multiplicar(6,4);
calc.dividir(6,2);
/* calc.dividir(6,0); */ //division por cero
calc.potencia(4,2)
calc.factorial(0);
calc.factorial(5);

/* Ejercicio 3 Canción */

console.log("");
console.log("Ejercicio 3 Canción");
// Instanciar la clase
let cancion1 = new Cancion("Always", "Pop Rock");
// Establecer Autor
cancion1.setAutor("Bon Jovi");
// Mostrar datos
cancion1.mostratDatos();

/* Ejercicio 4 Cuenta */

console.log("");
console.log("Ejercicio 4 Cuenta");
// Instanciar la clase
let cuenta1 = new Cuenta("Celina Guerrero", 25, "Ahorro", 12334312);
//llamando los metodos
cuenta1.depositar();
cuenta1.retirar(10);
cuenta1.mostrarCuenta();

/* Ejercicio 5 Persona */

console.log("");
console.log("Ejercicio 5 Persona");
// Instanciar la clase
let empleado1 = new Empleado("Celina", "Guerrero", "Santa Ana", "1234-4564", 26, 600);
// llamando los métodos
empleado1.mostrarDatos();
empleado1.imprimirSueldo();
empleado1.validarEdad();


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

