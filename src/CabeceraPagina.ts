export class CabeceraPagina {
    /* Atributos de la clase */
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'izquierda' | 'derecha' | 'centrado';

    // Inicializamos los atributos con el constructor de la clase
    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda'; //asignamos valor por defecto
    }

    // Método 1: Obtener el título, color y fuente de la pagina
    obtenerPropiedades(): { titulo: string; color: string; fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente,
        };
    }

    // Método 2: Establecer la alineación del título
    establecerAlineacion(alineacion: 'izquierda' | 'derecha' | 'centrado'): void {
        this.alineacion = alineacion;
    }

    // Método 3: Imprimir todas las propiedades
    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}