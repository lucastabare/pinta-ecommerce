import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const Categorias = () => {
  const classes = useStyles();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cervezas
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/category/categoryName/quilmes"
                    className="dropdown-item"
                  >
                    Quilmes
                  </Link>
                </li>
                <li>
                  <Link to="/categoryName/brahma" className="dropdown-item">
                    Brahma
                  </Link>
                </li>
                <li>
                  <Link to="/categoryName/artezanal" className="dropdown-item">
                    Artezanal
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/categoryProduct/cervezas"
                    className="dropdown-item"
                  >
                    Todas
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vinos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/categoryName/malbec" className="dropdown-item">
                    Malbec
                  </Link>
                </li>
                <li>
                  <Link to="/categoryName/cabernet" className="dropdown-item">
                    Cabernet
                  </Link>
                </li>
                <li>
                  <Link to="categoryName/frutales" className="dropdown-item">
                    Frutales
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/categoryProduct/vinos" className="dropdown-item">
                    todos
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destiladas
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/categoryName/gin" className="dropdown-item">
                    Gin
                  </Link>
                </li>
                <li>
                  <Link to="/categoryName/vodka" className="dropdown-item">
                    Vodka
                  </Link>
                </li>
                <li>
                  <Link to="/categoryName/Ron" className="dropdown-item">
                    Ron
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/categoryProduct/todos" className="dropdown-item">
                    Todos
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sin Alcohol
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/categoryName/gaseosa" className="dropdown-item">
                    Gaseosas
                  </Link>
                </li>
                <li>
                  <Link to="/categoryName/jugos" className="dropdown-item">
                    Jugos
                  </Link>
                </li>
                <li>
                  <Link to="/categoryName/aguas" className="dropdown-item">
                    Aguas
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    to="/categoryProduct/sin alcohol"
                    className="dropdown-item"
                  >
                    Todos
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//ESTILOS:

const useStyles = makeStyles((theme) => ({
  btnlink: {
    textDecoration: "none",
  },
}));
export default Categorias;
