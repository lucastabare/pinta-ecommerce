import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import Banner from "./Banner";
import ItemList from "./ItemList";
import db from "../Data/firebaseConfig.js";
import { firestoreFetch } from "../Data/firestoreFetch";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";

// import products from "../Data/productos";
// import promesaProducts from "../Data/promesaProducts";

const ItemListContainer = () => {
  const classes = useStyle();
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);
  console.log(idCategory);

  //DATOS DE PRODUCTOS DESDE UN ARCHIVO JSON LOCAL:
  // const [info, setInfo] = useState([]);
  // const { idCategory } = useParams();
  // useEffect(() => {
  //   promesaProducts(
  //     2000,
  //     products.filter((item) => {
  //       if (id === undefined) return item;
  //       return item.categoryId === parseInt(id);
  //     })
  //   )
  //     .then((resolve) => setInfo(resolve))
  //     .catch((reject) => console.log(reject));

  // fetch("https://api.mercadolibre.com/sites/MLA/search?q=bebidas")
  //   .then((res) => res.json())
  //   .then((data) => setInfo(data.results))
  //   .catch((err) => console.log(err));
  // }, [info]);

  return (
    <>
      <div className={classes.root}>
        <div className="container">
          <Banner />
          <ItemList items={datos} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
//Estilos:

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
}));
