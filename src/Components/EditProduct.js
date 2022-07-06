import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import db  from "../Data/firebaseConfig";
import { async } from "@firebase/util";

const EditProduct = () => {
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [imagen, setImagen] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "products", id);
    const data = {
        image: imagen,
        name: name,
        price: price,
        categoryName : category,
        categoryProduct : categories,
        description: description,
        stock: stock,
    };
    await updateDoc(product, data);
    navigate(`/`);
  };

  const getProductById = async (id) => {
    constproduct = await getDoc(doc(db, "products", id));
    if (product.exists(console.log(product.data()))) {
    } else {
      console.log("El producto no existe");
      setDescription(product.data().description);
      setStock(product.data().stock);
    }
  };

  const volver = (e) => {
    e.preventDefault;
    navigate(`/`);
  };

  useEffect(() => {
    getProductById(id);
    //eslint-disable-netx-line
  }, []);

  return (
    <div className="container">
      <div className="container">
        <h1>Actualizar Producto</h1>
        <div className="row crear-product">
          <div className="col">
            <form onSubmit={update}>
            <div className="mb-3">
                  <label className="form-label label-crear">Imagen</label>
                  <input
                    value={imagen}
                    placeholder="Ingresar URL de la imagen"
                    onChange={(e) => setImagen(e.target.value)}
                    type="text"
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
                Actualizar Producto
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

export default EditProduct;