class Cuenta {
  private nombre: string;
  private cantidad: number;
  private tipoCuenta: string;
  private numeroCuenta: string;

  // Constructor para inicializar los detalles principales de la cuenta
  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  // Permite realizar un depósito si el monto es válido
  public depositar(): void {
    if (this.cantidad < 5) {
      console.log('El depósito debe ser superior a $5.00');
    } else {
      console.log(`Depósito exitoso de $${this.cantidad.toFixed(2)}`);
    }
  }

  // Permite retirar un monto específico, validando condiciones básicas
  public retirar(valor: number): void {
    if (this.cantidad <= 0) {
      console.log('Saldo insuficiente: la cuenta está vacía.');
      return;
    }

    if (valor < 5) {
      console.log('El retiro mínimo permitido es de $5.00');
      return;
    }

    if (valor > this.cantidad) {
      console.log('No hay fondos suficientes para completar el retiro.');
      return;
    }

    this.cantidad -= valor;
    console.log(`Retiro de $${valor.toFixed(2)} realizado. Saldo restante: $${this.cantidad.toFixed(2)}`);
  }

  // Muestra información general de la cuenta bancaria
  public mostrarDatos(): void {
    console.log('--- Información de la Cuenta ---');
    console.log(`Titular: ${this.nombre}`);
    console.log(`Tipo: ${this.tipoCuenta}`);
    console.log(`Número: ${this.numeroCuenta}`);
  }
}

export default Cuenta;
