import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import { createContext } from "react";
import { IoCloseSharp } from "react-icons/io5";


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from "./components/ProductZoom";
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import Login from "./Pages/Login";
import Register from "./Pages/Register";



const MyContext = createContext();

function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const[maxwidth, setMaxWidth] = useState('lg');
  const[fullWidth, setFullWidth] = useState(true);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };


  const values = {
    setOpenProductDetailsModal
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/productDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route
              path={"/login"}
              exact={true}
              element={<Login />}
            />
            <Route
              path={"/register"}
              exact={true}
              element={<Register />}
            />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxwidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[rgba(0,0,0,0.7)] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]" onClick={handleCloseProductDetailsModal}><IoCloseSharp className="text-[20px]"/></Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-18 pr-16 productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
        
      </Dialog>

    </>
  );
}

export default App;
export { MyContext };
