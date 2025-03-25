import React, { useState } from 'react';
import Button from "@mui/material/Button";
import QuantityBox from "../QuantityBox";
import Rating from "@mui/material/Rating";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";


const ProductDetailsComponent = () => {

     const [productActionIndex, setProductActionIndex] = useState(null);

  return (
    <>
                <h1 className="text-[24px] font-[600] mb-2">
              Men Solid Round Neck Polyester T-Shirt
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">
                Brand :{" "}
                <span className="font-[500] !text-[#222222ca]">Arise</span>
              </span>

              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer text-[#666]">
                Review (5)
              </span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
                ₹ 349.00
              </span>
              <span className="price text-primary text-[20px] font-[600]">
                ₹ 129.00
              </span>

              <span className="text-[14px] pr-10 mb-5">
                Available In Stock :{" "}
                <span className="text-green-600 text-[14px] font-[700]">
                  174 Items
                </span>
              </span>
            </div>

            <p className="mt-3">
              {" "}
              Tailored from cotton blendthese men's t-shirts are meticulously
              crafted from a quality cotton blend, ensuring the ideal marriage
              of comfort and durability. The choice of a cotton blend fabric
              combines the softness of cotton with the resilience of synthetic
              fibres, resulting in a fabric that not only feels great against
              the skin but also withstands the rigours of daily wear. This
              ensures that the t-shirts remain a reliable wardrobe staple, ideal
              to be worn every day. Solid design for versatile stylingwith a
              solid design, these t-shirts become a versatile foundation for
              styling, allowing them to effortlessly adapt to a myriad of looks.{" "}
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="!text-[14px] mt-5 mb-2">
              Free Shipping (Estimated Delivery 3-4 Days)
            </p>

            <div className="flex items-center gap-4 py-2">
              <div className="quantityBoxWrapper w-[70px]">
                <QuantityBox />
              </div>

              <Button className="btn-org flex gap-2">
                <FaCartPlus className="text-[20px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
                <FaRegHeart className="text-[16px]" />
                Add to Wishlist
              </span>
              <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
                <IoGitCompareOutline className="text-[16px]" />
                Add to Compare
              </span>
            </div>
          
    </>
  )
}

export default ProductDetailsComponent;