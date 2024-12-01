import { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

const ProductContext = createContext([]);

const ProductProvider = ({children}) => {
    const [producteData,setProductData] = useState([]);

    const getProduct = ()=>{
      api.get("/api/shop-items/", { withCredentials: true })
      .then((res) => setProductData(res.data))
      .catch((error) => {
        console.error("Error fetching the comments.", error);
      });
    }

    useEffect(() => {
       getProduct();
      },[producteData]);
    
   return  <ProductContext.Provider value={[producteData,setProductData]}>{children}</ProductContext.Provider>;
  }

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);