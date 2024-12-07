import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { addToCart } from "../stores/cart";

const ProductDetails = ({ products }) => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();

  const dispatch = useDispatch();

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Product Loading or not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: quantity,
      })
    );
  };
  const handleMinusQ = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQ = () => {
    setQuantity(quantity + 1 > 10 ? 10 : quantity + 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-200 shadow-sm hover:shadow-lg p-10 max-w-[900px] w-full rounded-lg">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-auto"
          />
          <div>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mt-5">{product.description}</p>
            <p className="text-gray-900 mt-10 mb-5 font-bold text-3xl">
              ${product.price}
            </p>

            <div className="flex justify-start items-center my-5 gap-3">
              <button
                className="bg-gray-50 p-3 rounded-full"
                onClick={handleMinusQ}
              >
                -
              </button>
              <span className=" p-3 rounded-full">{quantity}</span>
              <button
                className="bg-gray-50 p-3 rounded-full"
                onClick={handlePlusQ}
              >
                +
              </button>
            </div>
            <Button variant="contained" size="medium" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
