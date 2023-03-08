import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteDenoSvg from './assets/vite-deno.svg';
import viteSvg from './assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src={viteDenoSvg} alt="Vite with Deno" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteSvg} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
