import React from "react";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className="p-5 bg-gradient-to-b from-black via-gray-500 to-white w-full md:w-1/6 md:h-[80vh] flex md:flex-col gap-2  justify-center  ">
      <Link to={"/addproduct"}>
        <div className="border  bg-gray-400 rounded-md p-3 flex items-center md:justify-center gap-1 font-bold font-serif mb-4 hover:bg-white ">
          <img src={add_product_icon} alt="" className="w-6 h-6" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"}>
        <div className="border bg-gray-400 rounded-md p-3 flex md:justify-center items-center gap-1 font-bold font-serif mb-4 hover:bg-white ">
          <img src={list_product_icon} alt="" className="w-6 h-6" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
