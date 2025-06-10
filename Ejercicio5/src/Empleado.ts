import { Persona } from "./Persona";

// Definición de la clase Empleado, que extiende la funcionalidad de Persona
class Empleado extends Persona {
  private sueldo: number;

  // El constructor inicializa los atributos heredados y asigna un sueldo inicial de cero
  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = 0;
  }

  // Asigna un valor al sueldo del empleado
  public cargarSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  // Muestra el sueldo actual del empleado en formato monetario
  public imprimirSueldo(): void {
    console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
  }

  // Muestra los datos personales del empleado sobrescribiendo el método abstracto de Persona
  public mostrarDatos(): void {
    console.log('--- Información del Empleado ---');
    console.log(`Nombre Completo: ${this.nombre} ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
  }
}

export default Empleado;
