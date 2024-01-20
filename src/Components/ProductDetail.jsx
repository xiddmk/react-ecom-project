import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { items } from './Data';
import Product from "./Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = ({ cart, setCart }) => {

  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([]);


  useEffect(() => {

    const newProduct = items.filter((product) => product.id == id)
    setProduct(newProduct[0])

    const relatedProducts = items.filter((newItem) => newItem.category === product.category)
    setRelatedProducts(relatedProducts)

  }, [id, product.category])

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
      <div className="h-full w-full flex flex-col">


        <div className="w-full flex pt-10 ">
          <div className="w-2/4">
            <img src={product.imgSrc} alt="" />
          </div>

          <div className="w-2/4 flex flex-col justify-center align-middle pl-20 gap-20">
            <div className="flex flex-col gap-8"><h5 className=" text-3xl font-bold">{product.title}</h5>
              <p className="text-lg font-bold">
              {product.description}
              </p>
              <p className=" text-2xl font-bold">₹ {product.price}</p></div>
            <div className='flex gap-5'>
              <button className="btn btn-success">Buy Now</button>
              <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className="btn btn-warning">Add Cart</button>
            </div>
          </div>
        </div>








        <div className="h-full w-full ">
          <h1 className="text-center font-mono text-4xl">Our Relative Products</h1>
          <Product cart={cart} setCart={setCart} items={relatedProducts} />
        </div>




      </div>
    </>
  )
}

export default ProductDetail
