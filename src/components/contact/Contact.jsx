import React from 'react'

const Contact = () => {
  return (
    <>
    <form className="m-5 b-2">
  <div className="mb-3">
    <label className="form-label">Nombre Completo</label>
    <input  className="form-control"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Asunto:</label>
    <input  className="form-control"/>
  </div>

  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Dejanos tu comentario:</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

 
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Este formulario es a modo de prueba, los datos completados no quedaran guardados</div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    
    <label className="form-check-label" for="exampleCheck1">Click aqui y salir</label>
  </div>
  <button type="submit" className="btn btn-primary">Salir</button>
</form>
    </>     
  )
}

export default Contact