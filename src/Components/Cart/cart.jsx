import './cart.css'

const Cart = ({ cart, removeFromCart, totalAmount }) => {
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                console.log('Cart item:', item);
                console.log('Price type:', typeof item.price);
            
                return (
                  <tr key={item.product_id}>
                    <td>{item.name}</td>
                    <td>${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}</td>
                    <td>{item.quantity}</td>
                    <td>${typeof item.price === 'number' ? (item.price * item.quantity).toFixed(2) : '0.00'}</td>
                    <td>
                      <button onClick={() => removeFromCart(item.product_id)}>Remove</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-total">
            <h2>Total: ${totalAmount.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
