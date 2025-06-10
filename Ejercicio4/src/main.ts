import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import Cuenta from './Cuenta';

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

// Instanciamos una cuenta bancaria con datos iniciales
const miCuenta = new Cuenta('Marvin Solórzano', 50, 'Ahorro', '7050-5514');

// Ejecutamos las funciones disponibles sobre la cuenta
miCuenta.mostrarDatos();      // Visualiza los detalles del titular y la cuenta
miCuenta.depositar();         // Intenta hacer un depósito con la cantidad establecida en el constructor
miCuenta.retirar(3);          // Falla: el monto a retirar es menor al mínimo permitido
miCuenta.retirar(6);          // Éxito: retiro permitido, se descuenta del saldo
miCuenta.retirar(10);         // Error: intenta retirar más de lo que queda disponible

