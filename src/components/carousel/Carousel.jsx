import "./style.css";

const carousel = () => {
  return (
   
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

      <div className="carousel_container">
      <div className="carousel-inner" >
        <div className="carousel-item active ">
          <img
            src="https://i.pinimg.com/originals/c8/b3/8a/c8b38a5ed6f2fb1813641a03a1ea2db3.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel_title carousel-caption">
            <h3 className="display-1"> SENTI LA TEXTURA </h3>
          </div>
        </div>
        <div className=" carousel-item">
          <img
            src="https://images5.alphacoders.com/905/905439.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel_title carousel-caption ">
            <h5 className="display-1"> DISFUTA SU AROMA </h5>
          </div>
        </div>
        <div className="carousel_title carousel-item">
          <img
            src="https://fondosmil.com/fondo/15481.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel_title carousel-caption ">
            <h5 className="display-1">CATA SU SABOR</h5>
          </div>
        </div>
      </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
  );
};

export default carousel;
