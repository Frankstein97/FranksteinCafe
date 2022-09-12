import React from 'react' 
import './style.css';
const item = ({ title,img,description,id} ) => {
  return (

    <>
    
    <div className="card text-bg-light " >
      <h5 className="card-title">{title}</h5>
      <img src={img} className="card-img-top" alt={title}/>
      <div className="card-body">
        {/* <p class="card-text">{price}</p> */}
        <small className="card-text">{description}</small>
      </div>
    </div>
    
    </>
  );
};

export default item