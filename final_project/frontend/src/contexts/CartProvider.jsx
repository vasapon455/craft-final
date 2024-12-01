import { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [cartData,setCartData] = useState([]);

    const getCart = ()=>{
      api.get("/api/cart-items/", { withCredentials: true })
      .then((res) => setCartData(res.data))
      .catch((error) => {
        console.error("Error fetching the comments.", error);
      });
    }

    useEffect(() => {
       getCart();
      },[]);
    
   return  <CartContext.Provider value={[cartData,setCartData]}>{children}</CartContext.Provider>;
  }

export default CartProvider;

export const useCart = () => useContext(CartContext);