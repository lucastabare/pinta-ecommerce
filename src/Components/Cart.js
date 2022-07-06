import {
  collection,
  increment,
  serverTimestamp,
  updateDoc,
  doc,
  setDoc
} from "firebase/firestore";
import { useContext, useState } from "react";
import  accounting  from 'accounting';
import { CartContext } from "./CartContext";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Resumen from "./Resumen";
import db from "../Data/firebaseConfig"
import { makeStyles } from "@material-ui/core";
import {Button} from '@chakra-ui/button'

const Cart = () => {
  const classes = useStyles();
  const cartShopping = useContext(CartContext);
  const createOrder = () => {
    const itemsForDB = cartShopping.cartList.map((item) => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem,
    }));

    cartShopping.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem),
      });
    });

    let order = {
      buyer: {
        name: "Juan Perez",
        email: "juan@gmail.com",
        phone: "123456789",
      },
      total: cartShopping.calcTotal(),
      items: itemsForDB,
      data: serverTimestamp(),
    };
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) =>
        alert(
          "Su pedido ha sido generado con exito.\n\n\nPedido Numero ID: " +
            result.id +
            "\n\n"
        )
      )
      .catch((err) => console.log(err));

    cartShopping.removeItem();
  };

  return (
    <div className={classes.root}>
      <button
        type="button"
        class="btn btn-warning"
        onClick={cartShopping.removeItem}
      >
        Vaciar Carrito
      </button>

      {cartShopping.cartList.length === 0 ? (
        <p>TU CARRITO ESTA VACIO</p>
      ) : (
        cartShopping.cartList.length > 0 &&
        cartShopping.cartList.map((item) => (
          <div className="container">
            <table className={classes.tablaCompra}>
              <thead>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Opciones</th>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">{item.imgItem}</td>
                  <td>{item.nameItem}</td>
                  <td>{item.descriptionItem}</td>
                  <td>{item.qtyItem}</td>
                  <td>{accounting.formatMoney(item.costItem, "$$")}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => cartShopping.clear(item.idItem)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
      {cartShopping.cartList.length > 0 && (
        <div className="container">
          <div className="row">
            <h3>Resumen De Compra</h3>
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3>
                    Sub Total:{" "}
                    {accounting.formatMoney(cartShopping.calcSubTotal(), "$$")}
                  </h3>
                  <h3>
                    Inpuestos:{" "}
                    {accounting.formatMoney(cartShopping.calcImpuestos(), "$$")}
                  </h3>
                  <h2>
                    <b>
                      Total:{" "}
                      {accounting.formatMoney(cartShopping.calcTotal(), "$$")}
                    </b>
                  </h2>
                  <hr />
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="teal"
                    variant="outline"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={createOrder}
                  >
                    Ir A Pagar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

//ESTILOS:

const useStyles = makeStyles((theme) => ({
  root: {},
  tablaCompra: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderCollapse: "collapse",
    fontSize: "14px",
    "& th": {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      fontSize: "14px",
      fontWeight: "bold",
    },
    "& td": {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      fontSize: "14px",
    },
    "& tr": {
      border: "1px solid #ddd",
      padding: "8px",
      textAlign: "left",
      fontSize: "14px",
    },
  },
}));
export default Cart;