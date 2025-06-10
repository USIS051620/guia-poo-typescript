import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import Empleado from './Empleado';

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
// Inicializa la lógica del contador sobre el botón con ID 'counter'
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

// Se crea una instancia de la clase Empleado con datos personales
const empleado = new Empleado('Marvin', 'Solórzano', 'Usulután', '7012-1004', 24);

// Se asigna un valor al sueldo del empleado
empleado.cargarSueldo(305.50);

// Se muestran los datos personales del empleado
empleado.mostrarDatos();

// Se evalúa si el empleado es mayor de edad
empleado.verificarMayorEdad();

// Se imprime el sueldo registrado del empleado
empleado.imprimirSueldo();
