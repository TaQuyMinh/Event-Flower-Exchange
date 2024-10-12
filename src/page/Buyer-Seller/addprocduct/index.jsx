import { useEffect, useState } from "react";
import Header from "../../../component/header";
import api from "../../../config/axios";
import Footer from "../../../component/footer";
import SlidebarSeller from "../../../component/slidebar-seller";

const AddProduct = () => {
  return (
    <div>
      <Header />
      <SlidebarSeller />
      <Footer />
    </div>
  );
};

export default AddProduct;
