/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";


const  ProductCard=({ p })=> {

  // hooks
  const navigate = useNavigate();

  return (
    <div className="card mb-3 hoverable">
   

      <div className="card-body">
        <h5>{p?.name}</h5>

        <h4 className="fw-bold">
          {p?.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h4>      

        <p className="card-text">{p?.description?.substring(0, 60)}...</p>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          View Product
        </button>

      
      </div>

    
    </div>
  );
}

export default ProductCard;