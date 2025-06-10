export class Cancion {
    // Propiedades principales de la canción
    titulo: string;
    genero: string;
    autor: string;

    // El constructor recibe el título y el género de la canción.
    // El autor se inicializa con una cadena vacía por defecto.
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }

    // Devuelve el nombre del autor asociado a la canción
    public getAutor(): string {
        return this.autor;
    }

    // Permite asignar un autor a la canción
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // Muestra toda la información de la canción en consola
    public imprimirCancion(): void {
        console.log("<--- Información de la canción --->");
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}
