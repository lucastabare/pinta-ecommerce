import { Button as Bonton } from "@chakra-ui/react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core";

const Item = ({ tittle, pictureUrl, price, id, stock }) => {
  const classes = useStyles();
  const onAdd = (contador) => {
    alert("Has agregado " + contador + "Items al carrito");
  };

  const agregarCart = ({ item }) => {
    onAdd(item);
  };

  return (
    <>
      <Link to={`/item/${id}`} className={classes.link}>
        <Button size="small">
          <Card
            sx={{ maxWidth: 300, width: 200, height: 380 }}
            className={classes.root}
          >
            <CardMedia
              height="160px"
              width="auto"
              component="img"
              image={pictureUrl}
              alt={tittle}
              className={classes.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {tittle}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {id}
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
                STOCK:{stock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {accounting.formatMoney(price, "$$")}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAtion}></CardActions>
            <Bonton colorScheme="linkedin" onClick={() => agregarCart()}>
              Agregar
            </Bonton>
          </Card>
        </Button>
      </Link>
    </>
  );
};

//ESTILOS
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "15px",
    padding: "20px",
  },
  img: {
    margin: "0 auto",
    width: "auto !important",
  },
  cardAtion: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
}));

export default Item;

/* <div className="card" style="width: 18rem;">
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{id}</p>
          <p className="card-text">STOCK: {stock}</p>
          <p className="card-text">{accounting.formatMoney(price, " $$")}</p>
          <a href="#" className="btn btn-primary">
            Description
          </a>
        </div>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div> */
