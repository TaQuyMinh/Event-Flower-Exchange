import React from "react";
import { NavLink } from "react-router-dom";

const SlidebarSeller = () => {
  return (
    <>
      <div className="w-[18%] min-h-screen border-r-2">
        <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
          <NavLink
            className="flex items-center border border-gray-300 border-r-0 px-3 py-2 rounded-lg"
            to="/addproduct"
          >
            <img
              className="w-5 h-5 mr-[10px]"
              src="https://cdn-icons-png.flaticon.com/512/2661/2661440.png"
              alt=""
            />
            <p className="hidden md:block">Add Product</p>
          </NavLink>

          <NavLink
            className="flex items-center border border-gray-300 border-r-0 px-3 py-2 rounded-lg"
            to="/addproduct"
          >
            <img
              className="w-5 h-5 mr-[10px]"
              src="https://cdn-icons-png.flaticon.com/512/6533/6533202.png"
              alt=""
            />
            <p className="hidden md:block">List Product</p>
          </NavLink>

          <NavLink
            className="flex items-center border border-gray-300 border-r-0 px-3 py-2 rounded-lg"
            to="/addproduct"
          >
            <img
              className="w-5 h-5 mr-[10px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lZsA3JNe_0bPy53ADp_sM-kbStGyEJ999A&s"
              alt=""
            />
            <p className="hidden md:block">Order</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SlidebarSeller;
