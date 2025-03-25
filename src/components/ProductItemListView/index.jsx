import React, { useContext } from "react";
import "../ProductItemListView/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { MyContext } from "../../App";

const ProductItem = () => {

  const context = useContext(MyContext);

  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center">
      <div className="group imgWrapper w-[25%] overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[220px] overflow-hidden">
            <img
              src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg"
              alt=""
              className="w-full"
            />
            <img
              src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
              alt=""
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-md p-1 text-[12px] font-[500]">
          -20%
        </span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col width-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white group" onClick={() => context.setOpenProductDetailsModal(true)}>
            <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white group">
            <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white group">
            <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>
        </div>
      </div>
      <div className="info p-3 py-5 px-8 w-[75%]">
        <h6 className="text-[15px] uppercase">
          <Link to="/" className="link transition-all">
            Arrow
          </Link>
        </h6>
        <h3 className="text-[18px] title mt-3 mb-3 font-[500] text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="link transition-all">
            Men Alias-N Regular ...
          </Link>
        </h3>
        <p className="font-[14px] mb-3">
          Brown self design opaque Casual shirt ,has a spread collar, button
          placket, long regular sleeves, curved hem.
        </p>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $78.00
          </span>
          <span className="price text-primary text-[15px] font-[600]">
            $58.00
          </span>
        </div>

        <div className="mt-3">
          <Button className="btn-org flex gap-2">
            <FaCartPlus className="text-[20px]"/>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
