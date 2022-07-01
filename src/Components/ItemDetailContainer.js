import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../Data/firestoreFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({}) => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemDetail item={dato} />
    </div>
  );
};

export default ItemDetailContainer;
