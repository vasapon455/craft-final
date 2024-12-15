import { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

const SalesOrderContext = createContext([]);

const SalesOrderProvider = ({children}) => {
    const [salesOrderData,setSalesOrderData] = useState([]);

    const getSalesOrderData = ()=>{
      api.get("/api/order/", { withCredentials: true })
      .then((res) => setSalesOrderData(res.data))
      .catch((error) => {
        console.error("Error fetching the sales orders.", error);
      });
    }

    useEffect(() => {
       getSalesOrderData();
      },[salesOrderData]);

   return  <SalesOrderContext.Provider value={[salesOrderData,setSalesOrderData]}>{children}</SalesOrderContext.Provider>;
  }

export default SalesOrderProvider;

export const useSalesOrder = () => useContext(SalesOrderContext);