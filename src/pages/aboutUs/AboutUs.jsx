import "./style.css";
// import Aos from "aos";
// import "aos/dist/aos.css"
// import { useEffect } from "react";
const AboutUs = () => {
//     useEffect (() => {
//     Aos.init({duration:2000})
// }, [])
  return (
    <>
      <div className="aboutus_container">
        <h1 className="home_title">Sobre Nosotros, o sobre mi</h1>
        <h2 className="home_subtitle" data-aos="flip-down">
          Cafe App es una Demo realizada en React
        </h2>
        <div className="text_container">
          <div
            className="text_container_flex"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <p>
              Esta página fue creada para hacer usos de los skills que aprendi
              con la biblioteca React. Pero también es una oportunidad para
              demostrar lo que se sobre la cafetería y el barismo . Al mismo
              tiempo celebro la posibildiad de hacer un Ecommerce, ya que posee
              varias funcionalidades útiles para practicar
            </p>
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="2000">
            <img
              className="aboutus_img"
              src="https://ih1.redbubble.net/image.457255839.8215/ur,mug_lifestyle,tall_portrait,750x1000.u3.jpg"
              alt="aboutmy"
            />
          </div>
        </div>
        <h2 className="home_subtitle" data-aos="flip-down">
          Pero que es el Barismo?
        </h2>
        <div className="text_container">
          <div data-aos="zoom-in-up" data-aos-duration="2000">
            <img
              className="aboutus_img"
              src="https://www.cafesaula.com/blog/wp-content/uploads/2015/06/uk_barista_challenge_search_begins.jpg"
              alt="barista"
            />
          </div>
          <div
            className="text_container_flex" 
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <p className="textoInicioDos">
              El barismo es el arte o especialidad, para diseñar y elaborar
              bebidas basadas en el café. La persona barista es aquella
              especialista encargadx de la preparación del café, empleando
              distintos tipos de leche, esencias aromatizantes, chocolate y
              licores, entre otros productos.
            </p>
          </div>
        </div>
        <h2 className="home_subtitle" data-aos="flip-down">
          Hay muchas formas de preparar cafe?
        </h2>
        <div className="text_container">
          <div
            className="text_container_flex"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <p>
              Cuando hablamos de café negro, el sabor o resultado final cambiara
              dependiendo del método que utilicemos. Los sabores del café
              oscilan entre lo dulce, lo amargo y lo acido. Estos varían
              dependiendo el tueste, el tipo de grano y el beneficio que posea
              el grano. Cada método realizara una extracción del café diferente
              y permitirá re-conocer sabores y aromas distintos.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-duration="2000">
          <img
            className="imagen_full"
            src="https://www.cafescaracas.com/img/cms/blog/Post-002/cafes-caracas-imagen-01.jpg"
            alt="metodos"
          />
        </div>
        <h2 className="home_subtitle" data-aos="flip-down">
          Y que tipos de cafe se toman en las cafeterias?
        </h2>
        <div className="text_container">
          <div
            className="text_container_flex"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <p className="textoInicioDos">
              Además del método con el que se prepara el café. Las cafeterías, o
              cafeterías de especialidad poseen bebidas originadas a partir del
              "expreso" El Expreso es un método de extracción de café muy
              concentrado que suele contener al rededor de 45ml A partir del
              expreso es que se realizan las recetas que van mas allá del típico
              "café con leche" El sabor del café con leche dependerá de las
              proporciones de café y leche que se encuentren en nuestra taza.
            </p>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="2000">
            <img
              className="aboutus_img"
              src="https://cafedelirante.com.ar/wp-content/uploads/2020/10/2-cafe-espresso-1.jpg"
              alt="algunoscafesconleche"
            />
          </div>
        </div>
        <h2 className="home_subtitle" data-aos="flip-down">
          Y el arte de Latte? que es el arte de Latte?
        </h2>
         <div className="text_container">
         <div data-aos="zoom-in-down" data-aos-duration="2000">
            <img
              className="aboutus_img"
              src="https://wallpaperaccess.com/full/1234742.jpg"
              alt="aboutmy"
            />
          </div>
          <div
            className="text_container_flex"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <p>
            El LatteArt es la habilidad del barista de dibujar en la taza del
              café La formación de estas figuras es posible gracias a la
              superposición de la crema de la leche por sobre la crema del café
              mezclando movimientos a la hora del vertido
            </p>
          </div>
          
        </div>





        <h2 className="home_subtitle" data-aos="flip-down">
          Y si llegaste hasta aca te agradezco mucho!
        </h2>
        <div className="text_container">
          <div
            className="text_container_flex"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <p>
              Estoy muy contento de poder compartir lo que se y lo que he
              aprendido sobre barismo Al mismo tiempo tambien he estado
              dedicando mi tiempo al arte de la programcion Con este proyecto
              defino que ya es hora de abandonar el barismo, y buscar solo
              dedicarme a la programacion.
            </p>
          </div>
        </div>
      </div>
    </>
    )
};

export default AboutUs;
