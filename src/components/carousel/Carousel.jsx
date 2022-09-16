import './style.css';

const carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
      <div className="carousel-item active">
          <img src="https://i.pinimg.com/originals/c8/b3/8a/c8b38a5ed6f2fb1813641a03a1ea2db3.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block me-3">
            <h5>Frota el cafe molido y mira su color </h5>
            <p>Al despertar, con la punta de tus dedos </p>
          </div>
      </div>
      <div className="carousel-item">
          <img src="https://images5.alphacoders.com/905/905439.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block me-3">
            <h5>Senti de aroma</h5>
            <p>Al mediodia, ingresando por la nariz  </p>
          </div>
      </div>
      <div className="carousel-item">
          <img src="https://fondosmil.com/fondo/15481.jpg" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block me-3">
            <h5>Disfruta su sabor</h5>
            <p>A la tarde, en el fondo del paladar</p>
          </div>
      </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default carousel