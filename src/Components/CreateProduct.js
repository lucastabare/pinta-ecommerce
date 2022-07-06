import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import  db  from "../Data/firebaseConfig";
import { makeStyles } from "@material-ui/core/styles";

const CreateProduct = () => {
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [imagen, setImagen] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState("");

    const classes = useStyles()
    const navigate = useNavigate();
  
    const productCollection = collection(db, "products");
  
    const store = async (e) => {
      e.preventDefault();
      await addDoc(productCollection, {
        image: imagen,
        name: name,
        price: price,
        categoryName : category,
        categoryProduct : categories,
        description: description,
        stock: stock,
      });
      navigate(`/`);
    };
  
    const volver = (e) => {
      e.preventDefault;
      navigate(`/`);
    };
  
    return (
      <div className={classes.root}>
        <div className="container">
          <h1>Crear Producto</h1>
          <div>
            <div className="col-md-12 ">
              <form onSubmit={store}>
                <div className="mb-3">
                  <label className="form-label label-crear">Imagen</label>
                  <input
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    type="text"
                    placeholder="Ingresar URL de la imagen"
                    className="form-control"
                  />
                </div>
  
                <div className="mb-3">
                  <label className="form-label label-crear">Nombre del Producto</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label label-crear">Descripcion</label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label label-crear">Precio</label>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label label-crear">Stock</label>
                  <input
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label label-crear">Categoria Tipo</label>
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label label-crear">Categoria Producto</label>
                  <input
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div class="btn-group" role="group">
                <button type="submit" className="btn btn-primary">
                  Cargar Producto
                </button>
  
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={volver}
                >
                  Volver
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateProduct;

  //ESTILOS:
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            margin: "0 auto",
            flexWrap: "wrap",
            textAlign: "center",
        },
    }));
