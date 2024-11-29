import "../styles/shopping.css";
import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ShoppingFilter from "../components/ShoppingFilter";
import { Link } from "react-router-dom";
import ShoppingCard from "../components/ShoppingCard";
import { useProducts } from "../contexts/ProductProvider";
import NotFound from "../components/NotFound";

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
  { id: 1, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" },
  { id: 2, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" },
  { id: 3, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" },
  { id: 4, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" },
  { id: 5, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" },
  { id: 6, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" },
  { id: 7, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" },
  { id: 8, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" },
  { id: 9, image: "/shopping/item-example.jpeg", name: "name", price: "xxx บาท" }
];

const Shopping = () => {
  const shopItem = useProducts();
  return (
    <Layout>
      <Section header={"Shopping"}>
        <section id="shopping">
          <Link
            to="/promotion"
            style={{
            
              textDecoration: "underline",
              
            }}
             className="paragraph black"
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
      <div className="shopping-card-container">
        {shopItem.length >0? shopItem.map((item) => (
          <ShoppingCard
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))
        :<NotFound/>}
      </div>
    </Layout>
  )
};

export default Shopping;
