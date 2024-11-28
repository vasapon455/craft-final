import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import CartCard from "../components/CartCard";
import { Button, Row, Col } from "react-bootstrap";

const Cart = () => {
  const cartData = [
    {
      id: 1,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
    {
      id: 2,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
    {
      id: 3,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
    {
      id: 4,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
    {
      id: 5,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
    {
      id: 6,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
    {
      id: 7,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
    {
      id: 8,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
    {
      id: 9,
      image: "/shopping/item-example.jpeg",
      name: "name",
      price: "xxx บาท",
      quantity: 1,
    },
  ];

  return (
    <Layout>
      <Section header="Cart">
        <section id="cart">
          {cartData.map((data) => (
            <CartCard
              id={data.id}
              image={data.image}
              name={data.name}
              price={data.price}
              quantity={data.quantity}
            />
          ))}
        </section>
        <div style={{marginBottom:"130px",marginTop:"50px"}}>
          <div className="price-group">
            <div>
              <p className="paragraph black">ราคารวม</p>
            </div>
            <div lg={12}>
              <p className="paragraph black">xxxxx บาท</p>
            </div>
          </div>
          <Button variant="red" type="submit" className="primary-button">
            <p className="paragraph white">ชำระเงิน</p>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Cart;
