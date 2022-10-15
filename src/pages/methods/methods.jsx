import React from "react";

const methods = () => {
  return (
    <>
      <h1 className="home_title">METODOS DE FILTRADOS</h1>
      <div className="text_container">
        <div
          className="text_container_flex"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <h4>
            En esta seccion te quiero contar acerca de los metodos de filtrado
            que mas me gustan, como prepararlos y que tipo de sabores se
            resaltan. Todos dan como resultado un cafe negro que va a poseer
            diferentes caracteristicas segun el metodo.
          </h4>
        </div>
      </div>

      <h2 className="home_subtitle" data-aos="flip-down">
        CHEMEX
      </h2>
      <div className="text_container">
        <div
          className="text_container_flex"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <p className="textoInicioDos">
            Para este metodo vas a necesitar una Cafetera Chemex, Un filtro de
            papel especial, unos 35 gr de café con una molienda media, y 450 ml
            de agua.
            <br />
            Se prepara colocando el filtro dentro de la Chemex de modo que este
            quede bien parejo sobre los bordes de la cafetera, luego colocamos
            el cafe molido y procederemos a vertir el agua en tres tiempos, a
            una temperatura de 90º a 95º.
            <br />
            El tiempo de vertido del agua tiene que ser entre los 3 y los 5
            minutos, en un primer momento colocaremos unos 100ml de agua, luego
            otros 150ml, y finalmente los ml restantes. No hay que pasarse de
            tiempo para que el cafe no ses sobreextraiga!
          </p>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <img
            className="aboutus_img"
            src="http://d2r9epyceweg5n.cloudfront.net/stores/001/259/541/products/chemex-021-0ab5a8c2b037dea05815907745589067-1024-10241-1eb92fa93eb23a1b2b15945098794038-640-0.png"
            alt="chemex"
          />
        </div>
      </div>
      <h2 className="home_subtitle" data-aos="flip-down">
        PRENSA FRANCESA
      </h2>
      <div className="text_container">
        <div data-aos="zoom-in-down" data-aos-duration="2000">
          <img
            className="aboutus_img"
            src="https://tiendadelbarista.com/wp-content/uploads/2021/05/Diseno-sin-titulo-6.png"
            alt="aboutmy"
          />
        </div>
        <div
          className="text_container_flex"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <p>
            Este es uno de los métodos más accesibles y fáciles de realizar
            <br />
            Se prepara colocando unos 20gramos de café con molienda semigruesa,
            directamente dentro de la prensa francesa. Luego colocamos 300ml de
            agua a 95º de golpe consiguiendo que todo el café quede cubierto.
            <br />
            Dejamos infusionar unos 3 minutos y rompemos la costra superior con
            una cuchara.
            <br />
            Finalmente colocamos el embolo y lo presionamos suavemente hasta el
            fondo. ¡Y listo!
          </p>
        </div>
      </div>
      <h2 className="home_subtitle" data-aos="flip-down">
        AEROPRESS
      </h2>
      <div className="text_container">
        <div
          className="text_container_flex"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <p className="textoInicioDos">
            Este es un método de preparación a presión, es necesario contar con
            la aeropress y sus filtros especiales, además de un café con
            molienda fina. Este método resalta muchísimo las notas del café y es
            de mis preferidos.
            <br />
            Se deben colocar unos 18g de cafe por 240ml de agua, siempre es
            aconsejable humedecer los filtros para evitar el sabor del mismo.
            <br />
            El tiempo de vertido del agua tiene que ser entre el minuto y el
            minuto y medio. El primer vertido dentro de la cámara de la
            aeropress será de unos 50ml, luego colocaremos otros 100ml y
            revolveremos para luego colocar los ml restantes. Presionamos el
            embolo sobre una taza firme y con fuerza hasta extraer todo el café.
            ¡Y a disfrutar!
          </p>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <img
            className="aboutus_img"
            src="https://st.kofio.co/img_product/igWQdvM9LJoUnB1/225/sq_nUPeEukZD5z0Fxg6Y87O_84.jpg"
            alt="aeropress"
          />
        </div>
      </div>
    </>
  );
};

export default methods;
