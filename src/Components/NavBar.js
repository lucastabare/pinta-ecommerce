import { useEffect, useState } from "react";

import CartWidget from "./CartWidget";
import Categorias from "./Categorias";
import { Link } from "react-router-dom";
import Logo from "../assets/descarga.png";
import SearchForm from "./SearchForm";
import Users from "./Users";
import { makeStyles } from "@material-ui/core/styles";

function NavBar() {
  const [mobile, setMobile] = useState(false);

  const classes = useStyle();

  useEffect(() => {
    const resposibe = () =>
      window.innerWidth < 1000 ? setMobile(true) : setMobile(false);
    resposibe();
    window.addEventListener("resize", () => resposibe());
  }, []);

  //ESTILOS DISPLAY-MOBILE:
  const displayMobile = () => {
    return (
      <div className={classes.navigatorBar}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light  ">
            <div className="">
              <a className="navbar-brand" href="#">
                <Link to="/">
                  <img
                    className={classes.logo}
                    src={Logo}
                    alt=""
                    width="130"
                    height="94"
                  />
                </Link>
              </a>
            </div>
            <div className={classes.categoriasMobile}>
              <Categorias />
            </div>
            <div className="container-fluid justify-content-start">
              <Link to="/login">
                <Users />
              </Link>
              <Link to="/cart">
                <CartWidget />
              </Link>
              <SearchForm />
            </div>
          </nav>
        </div>
      </div>
    );
  };

  //ESTILOS DISPLAR-DESKTOP:
  const displayDesktop = () => {
    return (
      <>
        <div className={classes.navigatorBar}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light  ">
              <div className="">
                <a className="navbar-brand" href="#">
                  <Link to="/">
                    <img
                      className={classes.logo}
                      src={Logo}
                      alt=""
                      width="130"
                      height="94"
                    />
                  </Link>
                </a>
              </div>
              <div className="container-fluid justify-content-end">
                <SearchForm />
                <Link to="/login">
                  <Users />
                </Link>
                <Link to="/cart">
                  <CartWidget />
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="container">
          <Categorias />
        </div>
      </>
    );
  };

  //RETORNO DE VISTA SEGUN TIPO DE PANTALLA:
  return <div>{mobile ? displayMobile() : displayDesktop()}</div>;
}

//ESTILOS:
const useStyle = makeStyles((theme) => ({
  //ESTILOS GENERALES:
  navigatorBar: {
    backgroundColor: "#fbdb6e",
    border: "solid white 2px",
    borderRadius: "5px",
    fontFamily: "Catamaran, sans-serif",
    fontSize: "25px",
    color: "#fafafa !important",
    "& .container-fluid": {
      margin: "10px",
    },
  },
  logo: {
    padding: "10px",
    borderRadius: "20%",
  },
  //ESTILOS DISPLAY-MOBILE:
  categoriasMobile: {
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default NavBar;
