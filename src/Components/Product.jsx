import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = ({ items , cart , setCart }) => {


    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        setCart([...cart, obj]);

        console.log("cart element", cart)
        toast.success('Item Added to Cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }


    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />



            <div className='container'>
                <div className="row">
                    {items.map((product) => (
                        <div key={product.id} className='col-lg-4 col-md-6 my-3 text-center'>
                            <div className="col-md-3 p-5">
                                <div className="card" style={{ width: '22rem' }}>

                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.imgSrc} className="cursor-pointer card-img-top border" alt={product.title} />
                                    </Link>

                                    <div className="card-body">
                                        <Link to={`/product/${product.id}`}>
                                            <h5 className="card-title font-bold ">{product.title}</h5>
                                        </Link>
                                        <p className="card-text cursor-pointer text-sm">
                                            {product.description.length > 25 ? `${product.description.slice(0, 25)}...` : product.description}
                                        </p>

                                        <p className="card-text cursor-pointer font-mono text-xl font-extrabold p-4">₹ {product.price}</p>
                                        <div className='flex gap-5 justify-center'>
                                            <button className="btn btn-success">Buy Now</button>
                                            <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className="btn btn-warning">Add Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    );
};

export default Product;
