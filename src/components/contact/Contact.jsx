import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='m-5'>
        <label for="basic-url" class="form-label">Nombre</label>
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Fulanito" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div>

        <label for="basic-url" class="form-label">Tema de la consulta</label>
        <div class="input-group mb-3">
        <span class="input-group-text">Ref</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">Mail</span>
        <input type="text" class="form-control" placeholder="usuarioejemplo@gmail.com" aria-label="Server"/>
        </div>
        <div class="input-group">
        <span class="input-group-text">Ingrese aqui su consulta</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
    </div>
    </>     
  )
}

export default Contact