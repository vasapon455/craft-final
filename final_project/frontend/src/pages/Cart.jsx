import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import CartCard from "../components/CartCard";
import { Button, Row, Col } from "react-bootstrap";
import { useCart } from "../contexts/CartProvider";
import { useState } from "react";
import { useProducts } from "../contexts/ProductProvider";
import NotFound from "../components/NotFound";

const Cart = () => {
  const [cartData,setCarttData] = useCart()
 

  console.log(cartData)


  const [totalPrice,setTotalPrice] = useState(0) 

  const [buy,setBuy] = useState(false) 
 
  return (
    <Layout>
      <Section header="Cart">
        <section id="cart">
          {cartData.length>0?
          cartData.map((data) => (
            <CartCard
              id={data.id}
              image={data.image}
              name={data.item}
              price = {totalPrice}
              setPrice = {setTotalPrice}
              quantity={data.quantity}
              buy = {buy}
              setBuy = {setBuy}
            />
          )): <NotFound />
        }
        </section>
        <div style={{marginBottom:"130px",marginTop:"50px"}}>
          <div className="price-group">
            <div>
              <p className="paragraph black">ราคารวม</p>
            </div>
            <div lg={12}>
              <p className="paragraph black">{totalPrice} บาท</p>
            </div>
          </div>
          <Button variant="red" type="submit" className="primary-button" onClick={()=>setBuy(true)}>
            <p className="paragraph white">ชำระเงิน</p>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Cart;
