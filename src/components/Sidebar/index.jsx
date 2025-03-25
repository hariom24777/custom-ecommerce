import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import Button from "@mui/material/Button";
import { Rating } from "@mui/material";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] =
    useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar">
      {/* <h4 className="mb-2 text-[16px] font-[600] flex items-center pr-5 uppercase border-b border-[rgba(0,0,0,0.2)]">Filter</h4> */}

      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[rgba(0,0,0,0.7)]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative left-[-13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="T-Shirts"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Casual Shirts"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Formal Shirts"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jeans"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Casual Trousers"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Formal Trousers"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Casual Shoes"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Formal Shoes"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Sport Shoes"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[rgba(0,0,0,0.7)]"
            onClick={() =>
              setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)
            }
          >
            {isOpenAvailabilityFilter === true ? (
              <FaAngleUp />
            ) : (
              <FaAngleDown />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailabilityFilter}>
          <div className="scroll px-4 relative left-[-13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In stock"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[rgba(0,0,0,0.7)]"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4 relative left-[-13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Extra Small"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Extra Large"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Price
        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            From:<strong className="text-dark">Rs: {49}</strong>
          </span>
          <span className="ml-auto text-[13px]">
          To:<strong className="text-dark">Rs: {1000}</strong>
          </span>
        </div>
      </div>

      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Ratings
        </h3>
            <div className="w-full">
              <Rating defaultValue={5} size= "small" readOnly/>
            </div>
            <div className="w-full">
              <Rating defaultValue={4} size= "small" readOnly/>
            </div>
            <div className="w-full">
              <Rating defaultValue={3} size= "small" readOnly/>
            </div>
            <div className="w-full">
              <Rating defaultValue={2} size= "small" readOnly/>
            </div>
            <div className="w-full">
              <Rating defaultValue={1} size= "small" readOnly/>
            </div>
      </div>
    </aside>
  );
};

export default Sidebar;
