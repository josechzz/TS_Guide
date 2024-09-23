export default class Cancion{
    // Atributos de la clase
    titulo: string;
    genero: string;
    private autor: string;

    // Constructor que recibe el titulo y genero
    constructor(titulo: string, genero: string){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Inicializamos el autor como una cadena vacía
    }

    // Método get para obtener el autor
    getAutor(): string {
        return this.autor
    }

    // Método set para establecer el autor
    setAutor(autor: string): void{
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción
    mostratDatos(): void {
        console.log("Datos de la Canción");
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.getAutor()}`);
    }
}