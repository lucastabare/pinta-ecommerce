import {
    collection,
    increment,
    serverTimestamp,
    updateDoc,
  } from "firebase/firestore";
  import { useContext, useState } from "react";
  
  import { CartContext } from "./CartContext";
  import Resumen from "./Resumen";
  import { makeStyles } from "@material-ui/core";
  
  const Cart = () => {
    const classes = useStyles();
    const cartShopping = useContext(CartContext);
    const [cartList, setCartList] = useState([]);
  
    const deteleCarrito = () => {
      cartShopping.clear();
    };
  
    const deleteItem = () => {
      let result = cartList.filter((item) => item.id !== id);
      setCartList(result);
    };
  
    const createOrder = () => {
      const itemsForDB = test.carlist.map((item) => ({
        id: item.idItem,
        tittle: item.nameItem,
        price: item.costItem,
      }));
  
      test.carlist.forEach(async (item) => {
        const itemRf = doc(db, "products", item.idItem);
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
        total: test.calcTotal(),
        items: itemsForDB,
        data: serverTimestamp(),
      };
    };
  
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
  
    return (
      <div className={classes.root}>
        <button type="button" class="btn btn-warning" onClick={deteleCarrito}>
          Vaciar Carrito
        </button>
        <button type="button" class="btn btn-danger" onClick={deleteItem}>
          Elimar producto
        </button>
        {cartShopping.cartList.length === 0 ? (
          <p>TU CARRITO ESTA VACIO</p>
        ) : (
          cartShopping.cartList.map((item) => (
            <>
              <table>
                <thead>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Opciones</th>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{item.idItem}</th>
                    <td>{item.nameItem}</td>
                    <td>{item.qtyItem}</td>
                    <td>{item.costItem}</td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Resumen />
            </>
          ))
        )}
        {/*ACTIVA MODAL CUANDO PASE EL DESAFIO
         <div
          className="modal"
          id="checkout"
          tabindex="-1"
          role="dialog"
          aria-labelledby="tittleCkeckOut"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="tittleCkeckOut">Mi Carrito</h5>
                <button className="close" data-dismis="modal" aria-label="cerrar">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="alert alert-succes">
                  <table className="table table-dark table-hover">
                    <thead>
                      <th scope="col">#</th>
                      <th scope="col">Item</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Opciones</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">
                          <img
                            width="50px"
                            src="https://bluemonk.com.ar/95-thickbox_default/fernet-branca-750cc.jpg"
                            alt="imgItem"
                          />
                        </td>
                        <td scope="row">Fernet</td>
                        <td scope="row">2</td>
                        <td scope="row">$5000</td>
                        <td scope="row">
                          <button type="button" className="btn btn-danger">
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <h4>Total: $5000</h4>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-warning"
                  type="button"
                  data-dismis="modal"
                >
                  Cerrar
                </button>
                <button className="btn btn-success" type="button">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  };
  
  //ESTILOS:
  
  const useStyles = makeStyles((theme) => ({}));
  export default Cart;
  