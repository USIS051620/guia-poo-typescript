// Clase base abstracta que representa a una persona
export abstract class Persona {
  protected nombre: string;
  protected apellido: string;
  protected direccion: string;
  protected telefono: string;
  protected edad: number;

  // Constructor que establece los valores iniciales de la persona
  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  // Indica si la persona tiene 18 años o más
  public verificarMayorEdad(): void {
    if (this.edad >= 18) {
      console.log('La persona es mayor de edad.');
    } else {
      console.log('La persona es menor de edad.');
    }
  }

  // Método obligatorio que las clases hijas deben implementar para mostrar información
  public abstract mostrarDatos(): void;
}
