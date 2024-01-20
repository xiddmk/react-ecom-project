import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (productId) => {
    // Filter out the item with the given productId
    const updatedCart = cart.filter((product) => product.id !== productId);
    // Update the cart state
    setCart(updatedCart);
  };

  return (
    <>
      <div className="container flex flex-col pt-16 justify-center align-middle items-center">
        {cart.length === 0 ? (
          <>
            <h1 className='pb-[615px]'>Your cart is empty</h1>
          </>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="card mb-3" style={{ width: '700px' }}>
              <FontAwesomeIcon
                icon={faTimes}
                className="remoov"
                onClick={() => removeFromCart(product.id)}
              />
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">₹ {product.price}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">{product.description}</small>
                    </p>
                  </div>
                  <button className="btn btn-success">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
