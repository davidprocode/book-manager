export default function Biblioteca() {
  return (
    <div className="nav-content">
      <ul className="tabs">
        <li className="tab blue lighten-3">
          <a className="white-text" href="/pesquisar">
            Pesquisar Livro
          </a>
        </li>
        <li className="tab blue lighten-3">
          <a className="white-text" href="/adicionar-livro">
            Adicionar Livro
          </a>
        </li>
      </ul>
    </div>
  );
}
