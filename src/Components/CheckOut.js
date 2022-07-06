import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db  from "../Data/firebaseConfig";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { accounting } from 'accounting';



const CheckOut = () => {
  const MySwal = withReactContent(Swal);
  const [products, setProducts] = useState([]);
  
  const productsCollection = collection(db, "products");
  
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
   
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    
  };
 
  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };
 
  const confirmDelete = (id) => {
    MySwal.fire({
      title: "¿Eliminar el producto?",
      text: "No podra volver atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Eliminado!", "Su producto fue eliminado.", "success");
      }
    });
  };
  //6-usamos useEffect
  useEffect(() => {
    getProducts();
  }, []);
  //7-devolvemos vista de nuestro componente

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link
                to="/create"
                className="btn btn-secondary mt-2 mb-2 btn-create"
              >
                Agregar Productos
              </Link>
            </div>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Descripcion</th>
                  <th>Stock</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.description}</td>
                    <td>{product.stock}</td>
                    <td>{accounting.formatMoney(product.price,"$$")}</td>
                    <td>
                      <Link
                        to={`/edit/${product.id}`}
                        className="btn btn-warning btn-pencil"
                      >
                        {" "}
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        onClick={() => {
                          confirmDelete(product.id);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default CheckOut;
  