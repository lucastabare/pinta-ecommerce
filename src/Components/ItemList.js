import CircularProgress from "@material-ui/core/CircularProgress";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";

const ItemList = ({ items }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {items.length > 0 ? (
        items.map((item, key) => (
          <Item
            tittle={item.name}
            pictureUrl={item.image}
            price={item.price}
            stock={item.stock}
            key={key.id}
            id={item.id}
            // id={item.seller.id}
            // title={item.title}
            // pictureUrl={item.thumbnail}
            // price={item.price}
            // stock={item.installments.quantity}
          />
        ))
      ) : (
        <>
          {/* <p>Cargando...</p> */}
          <CircularProgress disableShrink className={classes.loading} />
        </>
      )}
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    marginTop: "20px",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  loading: {
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
}));
export default ItemList;
