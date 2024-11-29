import { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

const ProductContext = createContext([]);

const [data,setData] = useState([])

useEffect


const product = await api.get("/shop-items/");

const ProductProvider = ({children}) => {
    <ProductContext.Provider value={product}>{children}</ProductContext.Provider>;
  }

export default ProductProvider

export const useProducts =()=> useContext(ProductContext)