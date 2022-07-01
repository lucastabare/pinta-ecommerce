import { useContext, useState } from "react";

import { Button } from "@material-ui/core";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core/styles";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const cartShopping = useContext(CartContext);

  const onAdd = (contador) => {
    alert("Has agregado " + contador + "Items al carrito");
    setItemCount(contador);
    //se agregar producto al carrito usando el contexto
    cartShopping.addItem(item, contador);
  };
  const classes = useStyles();

  return (
    <>
      {item && item.image ? (
        <div className={classes.root}>
          <div className={classes.tittle}>
            <h2>Producto: {item.name}</h2>
          </div>
          <div className={classes.contenedor}>
            <div className={classes.img}>
              <img src={item.image} />
            </div>
            <div className={classes.description}>
              <p>Description: {item.description}</p>
              <p>Precio: {accounting.formatMoney(item.price, "$$")}</p>
              <p>Stock: {item.stock}</p>
              {itemCount === 0 ? (
                <ItemCount
                  stock={item.stock}
                  initial={itemCount}
                  onAdd={onAdd}
                />
              ) : (
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="secondary">
                    CheckOut
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>No hay producto</div>
      )}
    </>
  );
};

//ESTILOS
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    backgroundColor: "#2c2a66",
    backgroundImage:
      "url(https://rapiboy.com/Content/publica3/assets/svg/restaurante.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  },
  tittle: {
    fontSize: "2rem",
    width: "100%",
    height: "80px",
    margin: "0 auto",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#fff",
    paddingTop: "20px",
  },
  contenedor: {
    margin: "0 auto",
    display: "flex",
    marginTop: "100px",
    width: "100%",
    height: "300px",
  },
  img: {
    width: "40%",
    justifyContent: "left",
    "& img": {
      width: "50%",
      borderRadius: "50px",
    },
  },
  description: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    "& p": {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#fff",
    },
  },
}));

export default ItemDetail;
