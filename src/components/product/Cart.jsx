import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../Redux/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold fs-1">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                  className="me-3"
                />
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1 text-muted">Price: ₹{item.price}</p>
                  <p className="mb-1 text-muted">Subtotal: ₹{item.price * item.quantity}</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted fw-bold ">Your cart is empty.</p>
      )}

      {cartItems.length > 0 && (
        <h3 className="text-end mt-4">
          <strong>Total:</strong> ₹{totalPrice}
        </h3>
      )}
    </div>
  );
}

export default Cart;
