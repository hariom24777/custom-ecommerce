import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";


const QuantityBox = () => {
  const [quantityValue, setQuantityValue] = useState(1);
  const addQuantity = () => {
    setQuantityValue(quantityValue + 1);
  };
  const removeQuantity = () => {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    }
  };

  return (
    <div className="quantityBox flex items-center relative">
      <input
        type="number"
        className="w-full h-[40px] p-2 pl-5 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
        value={quantityValue}
      />
      <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50 border-l border-[rgba(0,0,0,0.2)]">
        <Button
          className="!min-w-[25px] !w-[25px] !h-[20px] !text-[rgba(0,0,0,0.7)] !rounded-none hover:!bg-[#ff5252] hover:!text-[#fff]"
          onClick={addQuantity}
        >
          <FaAngleUp className="text-[12px]" />
        </Button>
        <Button
          className="!min-w-[25px] !w-[25px] !h-[20px] !text-[rgba(0,0,0,0.7)] !rounded-none hover:!bg-[#ff5252] hover:!text-[#fff]"
          onClick={removeQuantity}
        >
          <FaAngleDown className="text-[12px]" />
        </Button>
      </div>

    </div>
  );
};

export default QuantityBox;
