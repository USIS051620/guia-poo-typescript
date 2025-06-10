import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Calculadora } from './calculadora.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
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

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const calc = new Calculadora();

console.log('--- Marvin Solórzano ---');
console.log('--- Calculadora está lista para usar: ---');
console.log('La suma de 15 + 6 es: ', calc.sumar(15, 6));         // 21
console.log('La resta de 20 - 9 es: ', calc.restar(20, 9));      // 11
console.log('La multiplicación de 5 x 6 es: ', calc.multiplicar(5, 6)); // 30
console.log('La división de 30 / 4 es: ', calc.dividir(30, 4));  // 7.5
console.log('La potencia de 5 ^ 6 es: ', calc.potencia(5, 6));  // 15625
console.log('El factorial de 10! es: ', calc.factorial(10));   // 3628800 