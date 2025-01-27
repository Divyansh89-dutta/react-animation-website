import React, { useState } from "react";
import Button from "./Button";

function Product({ items, index, mover }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full py-14 h-[23rem] sm:h-auto">
      <div
        style={{
          backgroundImage: hover ? `url(${items.bgimage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: hover ? "12px" : "0",
          transition:
            "background-image 0.3s ease-in, padding 0.3s ease-in, transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
        className="w-full"
      >
        <div
          onMouseEnter={() => (setHover(true), mover(index))}
          onMouseLeave={() => setHover(false)}
          className="py-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8"
        >
          {/* Title Section */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center lg:text-left">
            {items.title}
          </h1>

          {/* Details Section */}
          <div className="det w-full lg:w-1/4 text-center lg:text-left">
            <p className="text-base sm:text-lg mb-5">{items.description}</p>
            <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              {items.live && <Button title="Live Website" />}
              {items.case && <Button title="Case Study" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
