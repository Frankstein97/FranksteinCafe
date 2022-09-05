import React from 'react' 
import './style.css';
const item = ({ title,img,description,price} ) => {
  return (

    <>
    
    <div class="card text-bg-light " >
    <h5 class="card-title">{title}</h5>
      <img src={img} class="card-img-top" alt={title}/>
      <div class="card-body">
        {/* <p class="card-text">{price}</p> */}
        <small class="card-text">{description}</small>
      
      </div>
        <strong class="text-muted">${price}</strong>
      
    </div>
    
    </>
  );
};

export default item