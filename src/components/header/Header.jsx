import "./header.style.css";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <nav className="navbar">
      <h2>Crea tu Card</h2>
      <ul className="navbar--list">
        <li>
          <Link to="/">Card</Link>
        </li>
        <li>
          <Link to="/card-animada">Fondo animado</Link>
        </li>
        <li>
          <Link to="/log-out" className="link">Cerrar Sesion</Link>
        </li>
      </ul>
    </nav>
  );
};
