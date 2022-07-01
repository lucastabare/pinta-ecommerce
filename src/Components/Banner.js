const Banner = () => {
    return (
      <div className="container">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.shopify.com/s/files/1/1103/5152/files/BannerHome_Desktop_DiaDelPadre_2022_1500x.progressive.png.jpg?v=1654528683"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/1103/5152/files/Impero_AndesOrigen_LanzamientoCraft_1500x280_BannerHomeDesktop_1_1_1_1500x.progressive.jpg?v=1654271865"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/1103/5152/files/BannerHome_Desktop_SouvenirPatagonia_1_1500x.progressive.png.jpg?v=1653081873"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  