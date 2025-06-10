export class Calculadora {

  // Devuelve la suma de dos valores numéricos
  public sumar(a: number, b: number): number {
    return a + b;
  }

  // Realiza la resta entre dos números y devuelve el resultado
  public restar(a: number, b: number): number {
    return a - b;
  }

  // Multiplica dos números y retorna el producto
  public multiplicar(a: number, b: number): number {
    return a * b;
  }

  // Divide el primer número entre el segundo, validando que no sea cero
  public dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No es posible dividir entre cero.");
    }
    return a / b;
  }

  // Calcula la base elevada al exponente
  public potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
  }

  // Devuelve el factorial del número proporcionado
  public factorial(n: number): number {
    if (n < 0) {
      throw new Error("El factorial no está definido para números negativos.");
    }
    if (n === 0 || n === 1) {
      return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}
