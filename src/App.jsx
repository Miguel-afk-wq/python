import Python from './assets/img/Python.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={Python} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>Python</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>Python é uma linguagem de programação criada por Guido van Rossum no final da década de 1980, com o objetivo de ser fácil de aprender e usar. A primeira versão pública, 0.9.0, foi lançada em 1991, incluindo recursos como funções e listas. A versão 1.0, lançada em 1994, modificou módulos e programação orientada a objetos, enquanto a versão 2.0, em 2000, trouxe melhorias como coleta de lixo e suporte a Unicode.</li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>Python é uma linguagem de programação interpretada que executa código linha por linha, permitindo desenvolvimento rápido e interativo. Com uma sintaxe clara e legível, suporta múltiplos paradigmas, como programação orientada a objetos e funcional. Possui uma vasta biblioteca padrão e pacotes de terceiros, abrangendo tarefas como automação, desenvolvimento web e ciência de dados. Sua comunidade ativa contribui para seu crescimento, tornando-a uma escolha popular entre desenvolvedores.</li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Miguel / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
