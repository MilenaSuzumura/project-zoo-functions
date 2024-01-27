import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to='entradas' data-testid="product-detail-link">Entradas</Link>
      <Link to='' data-testid="product-detail-link">Cronogramas</Link>
      <Link to='' data-testid="product-detail-link">Colaboradores</Link>
      <Link to='' data-testid="product-detail-link">Animais</Link>
    </header>
  );
}

export default Header;