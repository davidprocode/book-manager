export default function Header() {
  return (
    <nav className="nav-extended blue">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          CEEP Aureo Filho
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/biblioteca">Biblioteca</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
