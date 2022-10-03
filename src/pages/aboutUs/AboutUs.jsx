import "./style.css";
import Contact from "../../components/contact/Contact";


const AboutUs = () => {
  return (
    <>
      <div className="aboutus">
        <h1>QUIENES SOMOS</h1>
        <p>
          Somos una corriente Argentina, constituida en un curso de React, con
          domicilio social en Villa Crespo. Trabajamos para mejorar nuestras
          habilidades de programacion. Y tambien para fomentar la apreciacion
          del cafe.
        </p>
        <p>
          MISIÓN: Nuestra misión es generar cultura del gusto por las cosas bien
          hechas alrededor de una taza de café.
        </p>
        <p>
          VISIÓN: Nuestra visión es ser reconocidos en el mundo, por la
          producción, transformación y comercialización de cafés especiales de
          Colombia y otros orígenes, con características derivadas de la alta
          calidad en los procesos de cultivo, transformación y servicio.
        </p>
        <h3>NUESTROS OBJETIVOS:​</h3>
        <p>
          Participación en ferias y eventos especializados de café a nivel
          internacional. Desarrollo y conservación de ambientes para el deleite
          y la cultura del buen café en el mundo: tiendas, boutiques, museos,
          galerías, etc. Apoyo a la investigación y desarrollo en proyectos de
          café. Implementación y uso de tecnologías de punta en procesos
          productivos y de transformación.
        </p>
        <h3>VALORES</h3>
        <p>
          tenemos un servicio basado en la amabilidad, la cordialidad, el
          respeto y la confianza, que se proyectan en un clima laboral
          agradable, en donde el cliente siempre será el primero. Este, es el
          reflejo de la creencia en Dios y la práctica de valores corporativos
          de buena fe: honestidad, amor por el trabajo, lealtad,
          responsabilidad, respeto y perseverancia, con un toque de autenticidad
          a todo lo que se hace y valorando nuestro patrimonio en todas sus
          dimensiones.
        </p>
        <h3>RESPONSABILIDAD AMBIENTAL</h3>
        <p>
          Reciclamos y aprovechamos los residuos sólidos de las bebidas de café,
          como materia prima para la elaboración de abonos orgánicos. Nuestros
          cafés y bebidas se sirven en vasos de cartón biodegradables, apoyando
          de esta forma los procesos de producción limpia. Nos hemos involucrado
          activamente en la sensibilización hacia la protección y el cuidado del
          medio ambiente, a través de convocatorias, capacitaciones y
          conferencias, en alianza con instituciones de índole académica,
          ambiental y de investigación. Aprovechamiento de los residuos de la
          trilla del café, que sirve como combustible en los distintos procesos
          de secado mecánico del grano.
        </p>
      </div>
      <Contact/>
    </>
  );
};

export default AboutUs;
