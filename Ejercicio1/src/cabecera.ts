export class CabeceraPages {
  private titulo: string;
  private color: string;
  private fuente: string;
  private alineacion: 'izquierda' | 'centrado' | 'derecha';

  constructor() {
    this.titulo = '';
    this.color = '';
    this.fuente = '';
    this.alineacion = 'izquierda';
  }

  // Método 1: Establecer título, color y fuente
  public establecerEstilos(titulo: string, color: string, fuente: string): void {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  }

  // Método 2: Establecer alineación del título
  public establecerAlineacion(alineacion: 'izquierda' | 'centrado' | 'derecha'): void {
    this.alineacion = alineacion;
  }

  // Método 3: Imprimir todas las propiedades
  public imprimirPropiedades(): void {
    console.log('--- Cabecera de mi página ---');
    console.log(`Título: ${this.titulo}`);
    console.log(`Color: ${this.color}`);
    console.log(`Fuente: ${this.fuente}`);
    console.log(`Alineación: ${this.alineacion}`);
  }
}

