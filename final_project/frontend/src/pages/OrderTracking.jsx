import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import CartCardStatus from "../components/CartCardStatus";
import { useSalesOrder } from "../contexts/SalesOrderProvider";

const OrderTracking = () => {
  const [salesOrderData, setSalesOrderData] = useSalesOrder();


  return (
    <Layout>
      <Section header="Order Tracking">
        <section id="cart">
          {salesOrderData.map((data) => (
            <CartCardStatus
              id={data.id}
              name={data.item}
              quantity={data.quantity}
              status={data.status}
            />
          ))}
        </section>
      </Section>
    </Layout>
  );
};

export default OrderTracking;
