import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ShoppingFilter from "../components/ShoppingFilter";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/shopping.css";
import ShoppingCard from "../components/ShoppingCard";

const category = [
  "All",
  "New Arrival",
  "Gothic",
  "Lolita",
  "Angura Kei",
  "Fairy Kei",
  "Kogai",
  "Kimono",
  "Gyaruno",
  "Mori Kei",
  "Visual Kei",
  "Sukajan",
];

const shopItem = [
  { id: 1, image: "src", name: "name", price: "price" },
  { id: 2, image: "src", name: "name", price: "price" },
  { id: 3, image: "src", name: "name", price: "price" },
  { id: 5, image: "src", name: "name", price: "price" },
  { id: 1, image: "src", name: "name", price: "price" },
  { id: 6, image: "src", name: "name", price: "price" },
  { id: 8, image: "src", name: "name", price: "price" },
  { id: 9, image: "src", name: "name", price: "price" },
  { id: 10, image: "src", name: "name", price: "price" },
];

const Shopping = () => {
  return (
    <Layout>
      <Section header={"Shopping"}>
        <section id="shopping">
          <Link
            to="/"
            style={{
              fontFamily: "Kanit",
              color: "black",
              textDecoration: "underline",
            }}
          >
            ดูโปรโมชัน
          </Link>
          <div className="filter-container">
            {category.map((cat) => (
              <ShoppingFilter name={cat} />
            ))}
          </div>
        </section>
      </Section>
      <Container className="shopping-card-container">
        {shopItem.map((item) => (
          <ShoppingCard
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Shopping;
