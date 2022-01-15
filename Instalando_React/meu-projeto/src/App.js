// Este arquivo App.js é a página de inicialização do React pelo navegador.

/* Após a instalação do React pelo terminal é sugerido esses comandos:
cd meu-projeto
yarn start  
O comando yarn start é para abrir a página no navegador do Chorme. */

//Vídeo Aula do React no qual fiz esse projeto: https://youtu.be/Jg6JaEjovJk

//import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Katia'
  const newName = name.toUpperCase

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

return (
    <div className="App">
        <h2>Alterando o JSX</h2>
        <p>Olá, {newName}</p>
        <p>Soma: {sum(1, 2)}</p>
        <img src={url} alt="Minha Imagem" />
        <HelloWorld />
    </div>
  );
}

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
