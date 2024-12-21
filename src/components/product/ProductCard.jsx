import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import toast from 'react-hot-toast';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product })); // Ensure the product object includes `id`
    toast.success("Successfully added to cart");
  };

  return (
    <div className="card mb-4 shadow-sm">
    
      <div className="card-header d-flex justify-content-between align-items-center">
        <span className="fw-bold text-primary">{product.salt}</span>
      </div>
      <div className="card-body">
        <div className="text-center">
          <img
            src={product.image}
            alt={product.salt}
            className="img-fluid rounded"
            style={{ maxHeight: '150px', objectFit: 'cover' }}
          />
        </div>
        <p className="mt-3 text-muted">{product.description}</p>

        {product.marketPrices && product.marketPrices.length > 0 && (
          <>
            <h6 className="text-secondary">Market Prices:</h6>
            <ul className="list-unstyled">
              {product.marketPrices.map((price, index) => (
                <li key={index} className="d-flex justify-content-between">
                  <span>{price.name}</span>
                  <span>₹{price.value}</span>
                </li>
              ))}
            </ul>
            <hr />
          </>
        )}

        <h6 className="text-success">SayaCare Price:</h6>
        <h5 className="fw-bold">₹{product.price}</h5>
        <button className="btn btn-primary w-100 mt-3" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
