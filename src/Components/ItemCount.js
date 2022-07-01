import { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const classes = useStyle();
  const [contador, setContador] = useState();

  useEffect(() => {
    setContador(initial);
  }, []);

  const aumentar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuir = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Error, no se puede sumar numero negativos");
    }
  };

  return (
    <>
      {/* <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
        onClick={disminuir}
      >
        <button type="button" className="btn btn-danger">
          -
        </button>
        <input type="number" aria-label={contador} />

        <button type="button" className="btn btn-success" onClick={aumentar}>
          +
        </button>
      </div> */}
      <Box className={classes.root}>
        <Button
          className={classes.button}
          variant="contained"
          color="error"
          onClick={disminuir}
        >
          -
        </Button>
        <h3 className={classes.count}>{contador}</h3>
        <Button
          className={classes.button}
          variant="contained"
          color="success"
          onClick={aumentar}
        >
          +
        </Button>
        <Button
          className={classes.buttonAdd}
          variant="contained"
          color="secondary"
          onClick={() => onAdd(contador)}
        >
          Agregar
        </Button>
      </Box>
    </>
  );
};

//Estilos
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    padding: "0.5rem",
  },
  count: {
    backgroundColor: "#000",
    borderRadius: "20%",
    border: "1px solid red",
    fontSize: "20px",
    color: "#fff",
    width: "40px",
    height: "40px",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  },
  button: {
    width: "30px",
    height: "30px",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    margin: "15px",
    padding: "15px",
  },
  buttonAdd: {
    width: "90px",
    height: "50px",
    margin: "15px !important",
    padding: "15px",
  },
}));
export default ItemCount;
