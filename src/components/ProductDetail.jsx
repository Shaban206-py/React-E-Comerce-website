import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({ cart, setCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        // Find the selected product by id
        const selectedProduct = items.find((item) => item.id == id);
        if (selectedProduct) {
            setProduct(selectedProduct);
            // Filter related products based on the category of the selected product
            const filteredRelatedProducts = items.filter((item) =>
                item.category === selectedProduct.category && item.id !== selectedProduct.id
            );
            setRelatedProducts(filteredRelatedProducts);
        }
    }, [id]);

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        setCart((prevCart) => [...prevCart, obj]);
        console.log("Adding to cart:", title);
        toast.success('🦄 Add to cart', {
            position: "top-right",
            autoClose: 1493,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1493}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="container con">
                <div className="img">
                    <img src={product.imgSrc} alt={product.title || 'Product Image'} />
                </div>
            </div>
            <div className='text-center'>
                <h1 className="card-title">{product.title}</h1>
                <p className="card-text">{product.description}</p>
                <button className='btn btn-primary mx-3'>{product.price}{" "}PKR</button>
                <button
                    onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                    className='btn btn-warning'>Add to Cart</button>
            </div>

            <h2>Related Products</h2>
            <Product cart={cart} setCart={setCart} items={relatedProducts} />
        </>
    );
}

export default ProductDetail;
