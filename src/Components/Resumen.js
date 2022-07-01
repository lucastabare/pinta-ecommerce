import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";

const Resumen = () => {
  return (
    <div className="container">
      <h3>Resumen De Compra</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Sub Total: {}</h3>
              <h3>Inpuestos: {}</h3>
              <h2>
                <b>Total: {}</b>
              </h2>
              <hr />
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
              >
                Ir A Pagar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumen;
