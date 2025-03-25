import React, { useState } from "react";
import { Breadcrumbs, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import ProductSlider from "../../components/ProductSlider";
import ProductDetailsComponent from "../../components/ProductDetailsComponent";

const ProductDetails = () => {
 

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition text-[14px]"
            >
              Fashion
            </Link>

            <Link
              underline="hover"
              color="inherit"
              className="link transition text-[14px]"
            >
              Men Solid Round Neck Polyester T-Shirt
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10 pl-10">
              <ProductDetailsComponent />
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Information
            </span>
            <span
              className={`link text-[16px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Review
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Tailored from cotton blendthese men's t-shirts are meticulously
                crafted from a quality cotton blend, ensuring the ideal marriage
                of comfort and durability. the choice of a cotton blend fabric
                combines the softness of cotton with the resilience of synthetic
                fibres, resulting in a fabric that not only feels great against
                the skin but also withstands the rigours of daily wear. this
                ensures that the t-shirts remain a reliable wardrobe staple,
                ideal to be worn every day.solid design for versatile
                stylingwith a solid design, these t-shirts become a versatile
                foundation for styling, allowing them to effortlessly adapt to a
                myriad of looks. the absence of prints or patterns ensures that
                these t-shirts serve as a blank canvas, easily complementing
                different styles and ensembles. this simplicity in design
                provides you with the freedom to pair the t-shirts with various
                bottoms, jackets, or accessories, curating your look any way you
                want.round neckline designthe t-shirts feature a classic round
                neckline design, adding a timeless and universally flattering
                element to the garment. the round neckline strikes a balance
                between casual and polished, making it suitable for a range of
                occasions. this versatile design detail accommodates different
                body shapes and sizes, ensuring a comfortable fit without
                compromising on style.half sleeves for optimal comfortdesigned
                with half sleeves, these t-shirts prioritise comfort while
                maintaining a contemporary aesthetic.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div className="relative overflow-x-auto">
                <table className="w-[50%] text-[15px] text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-200">
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Neckline
                      </th>
                      <td className="border border-gray-200 px-6 py-2">
                        Round
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Neckline
                      </th>
                      <td className="border border-gray-200 px-6 py-2">
                        Round
                      </td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Style Type
                      </th>
                      <td class="border border-gray-200 px-6 py-2">Regular</td>
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Style Type
                      </th>
                      <td class="border border-gray-200 px-6 py-2">Regular</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Occasion
                      </th>
                      <td class="border border-gray-200 px-6 py-2">Casual</td>
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Occasion
                      </th>
                      <td class="border border-gray-200 px-6 py-2">Casual</td>
                    </tr>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Fabric
                      </th>
                      <td class="border border-gray-200 px-6 py-2">
                        Polyester
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Fabric
                      </th>
                      <td class="border border-gray-200 px-6 py-2">
                        Polyester
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Wash Care
                      </th>
                      <td className="border border-gray-200 px-6 py-2">
                        Machine Wash
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-2 font-[600] text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Wash Care
                      </th>
                      <td className="border border-gray-200 px-6 py-2">
                        Machine Wash
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px] font-[500]">
                  Customer Ratings & Review
                </h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                        <img src="" alt="img" className="w-full" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="font-[500] text-[16px]">Virat Kohli</h4>
                        <h5 className="font-[500] text-[14px]">23-03-2025</h5>
                        <p className="text-[14px]">
                          I’m really happy with this T-shirt! The fabric is soft
                          and breathable, perfect for everyday wear. The fit is
                          just right – not too tight and not too loose. I
                          ordered a medium, and it fits true to size
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                        <img src="" alt="img" className="w-full" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="font-[500] text-[16px]">Virat Kohli</h4>
                        <h5 className="font-[500] text-[14px]">23-03-2025</h5>
                        <p className="text-[14px]">
                          I’m really happy with this T-shirt! The fabric is soft
                          and breathable, perfect for everyday wear. The fit is
                          just right – not too tight and not too loose. I
                          ordered a medium, and it fits true to size
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                        <img src="" alt="img" className="w-full" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="font-[500] text-[16px]">Virat Kohli</h4>
                        <h5 className="font-[500] text-[14px]">23-03-2025</h5>
                        <p className="text-[14px]">
                          I’m really happy with this T-shirt! The fabric is soft
                          and breathable, perfect for everyday wear. The fit is
                          just right – not too tight and not too loose. I
                          ordered a medium, and it fits true to size
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                        <img src="" alt="img" className="w-full" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="font-[500] text-[16px]">Virat Kohli</h4>
                        <h5 className="font-[500] text-[14px]">23-03-2025</h5>
                        <p className="text-[14px]">
                          I’m really happy with this T-shirt! The fabric is soft
                          and breathable, perfect for everyday wear. The fit is
                          just right – not too tight and not too loose. I
                          ordered a medium, and it fits true to size
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                        <img src="" alt="img" className="w-full" />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="font-[500] text-[16px]">Virat Kohli</h4>
                        <h5 className="font-[500] text-[14px]">23-03-2025</h5>
                        <p className="text-[14px]">
                          I’m really happy with this T-shirt! The fabric is soft
                          and breathable, perfect for everyday wear. The fit is
                          just right – not too tight and not too loose. I
                          ordered a medium, and it fits true to size
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px] font-[500]">Add a review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      // label="Write your review"
                      placeholder="Write your review..."
                      multiline
                      rows={5}
                      className="w-full"
                    />

                    <br />
                    <br />

                    <Rating name="size-small" defaultValue={0} />
                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>


        <div className="container pt-8">
          <h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
          <ProductSlider items={"6"} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
