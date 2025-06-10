import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts' // Importa la función setupCounter
import { CabeceraPages } from './cabecera.ts' // Importa la clase CabeceraPages

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


const cabecera = new CabeceraPages();

// Se aplican estilos personalizados al título principal
cabecera.establecerEstilos('Mi tarea Kodigo Marvin', 'Verde', 'Century Gothic');

// Se define la alineación del texto del título
cabecera.establecerAlineacion('derecha');

// Se muestran las propiedades actuales de la cabecera en consola
cabecera.imprimirPropiedades();

