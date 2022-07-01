import { Link } from "react-router-dom";
import imgUsers from "../assets/users.png";
import { makeStyles } from "@material-ui/core/styles";

const Users = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/iniciarSecion">
        <img
          src={imgUsers}
          alt="userIcon"
          width="40"
          height="40"
          title="Login"
        />
      </Link>
    </div>
  );
};
//ESTILOS:

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "25px",
  },
}));
export default Users;
