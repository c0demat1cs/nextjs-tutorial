"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      {" "}
      {/* add the onClick event handler */}
      <button onClick={() => console.log("Click")} className="btn btn-primary">
        {" "}
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
