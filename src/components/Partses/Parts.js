import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const Parts = ({ data, handleBuyNowBtn }) => {
  const { _id, img, name, description, price, minimumQuantity, available } =
    data;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-md hover:shadow-xl">
      <div className="card-body">
        <img src={img} alt={name} className="h-[300px] object-cover" />
        <h2 className="card-title">{name}</h2>
        <p className="p-0 m-0" title={description}>
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>
        <p className="p-0 m-0">
          Price: <span className="font-bold">${price}</span>
        </p>
        <p className="p-0 m-0">
          Minimum Quantity:
          <span className="font-bold">{minimumQuantity}</span>
        </p>
        {available < 1 && (
          <p className="py-4 px-8 rounded-lg bg-yellow-300">Out Of Stock</p>
        )}
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary text-base-100"
            onClick={() => handleBuyNowBtn(_id)}
          >
            Buy Now <ShoppingCartIcon className="h-4 text-base-100 ml-4" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parts;
