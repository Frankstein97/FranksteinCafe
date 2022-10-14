import "./style.css";
// Import several images
import cafecuartos from '../../img/cafecuartos.jpg'
import cafekilo from '../../img/cafekilo.jpg'
import cafeterafiltro from '../../img/cafeterafiltro.jpg'
import filtrochemex from '../../img/filtrochemex.jpg'
import presionvolturno from '../../img/presionvolturno.jpg'
import variedad from '../../img/variedad.jpg'


import { Link } from "react-router-dom";



const SectionProducts = () => {
  return (
    <>
      <div className="item_product " style={{}}>
        <h2 className="item-title text-center"  data-aos="flip-down"> Cafes en Grano </h2>
        <div className=" cardImgContainer col-12 col-sm-12 w-100 row">

          <div className="section_card card col-4  ">
            <img
              src= {cafecuartos}
              className=""
              alt="cafecuartos"
            />
          </div>
          <div className="section_card card col-4 ">
            <img
              src={variedad}
              className=""
              alt="variedad"
            />
          </div>
          <div className="section_card card col-4 ">
            <img
              src={cafekilo}
              className=""
              alt="cafekilo"
            />
          </div>
        </div>
        <div className="card-description col-12 col-sm-12">
          <p className="text-center" data-aos="zoom-in-down">
          "Aquí podrás ver todos los granos que tenemos para ofrecerte. <br/>
            Contamos con una amplia variedad de sabores, alturas y orígenes que hacen<br/>
            a nuestro café único y disfrutables para paladares exigentes."

          </p>
        </div>
        <div>
          <Link to={"/products"}>
            <div className="d-grid col-6 mx-auto mb-4">
              <button className="section_button btn btn-dark" type="button">
                ◅ VER MAS ▻
              </button>
            </div>
          </Link>
        </div>
      </div>

      <div className="separatorSection">
        <img
          src="https://i.pinimg.com/originals/0b/a4/7d/0ba47d70c9e5da3c57b9c96a652020b0.gif"
          alt="gifSeparatorSection"
          style={{ width: "400px" }}
        />
      </div>

      <div className="item_product" style={{}}>
        <h2 className="item-title text-center"  data-aos="flip-down"> Metodos de Filtrado </h2>
        <div className="cardImgContainer col-12 col-sm-12 w-100 row">
          <div className="section_card card col-4  ">
            <img
              src={cafeterafiltro}
              className=""
              alt="cafeterafiltro"
            />
          </div>
          <div className="section_card card col-4 ">
            <img
              src={filtrochemex}
              className=""
              alt="fitrochemex"
            />
          </div>
          <div className="section_card card col-4 ">
            <img
              src={presionvolturno}
              className=""
              alt="presionvoluturno"
            />
          </div>
        </div>
        <div className="card-description col-12 col-sm-12">
          <p className="text-center" data-aos="zoom-in-down">
            “También contamos con una sección en donde te mostramos los métodos <br/> 
            que mas nos gustan practicar y la forma que tenemos de prepararlos,<br/>
             el sabor final de un mismo tipo de grano dependerá del método que utilices.<br/>
              Cada grano tiene un potencial que se ajusta a tu gusto por el café.”
          </p>
        </div>
        <div>
          <Link to={"category/Filtrados"}>
            <div className="d-grid col-6 mx-auto mb-4">
              <button className="section_button btn btn-dark" type="button">
                ◅ IR A VER ▻
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionProducts;
