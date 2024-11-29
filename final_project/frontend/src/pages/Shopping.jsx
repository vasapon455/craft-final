import "../styles/shopping.css";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ShoppingFilter from "../components/ShoppingFilter";
import { Link } from "react-router-dom";
import ShoppingCard from "../components/ShoppingCard";
import { useProducts } from "../contexts/ProductProvider";
import NotFound from "../components/NotFound";
import {useState} from "react";

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


const Shopping = () => {
  const shopItem = useProducts();
  const [filterItem,setFilterItem] = useState(shopItem)

function handleFilter(category){
  const filterItem = filter.filter((item)=>item.category = category)
  setFilter(filterItem)
}
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
              <ShoppingFilter name={cat}/>
            ))}
          </div>
        </section>
      </Section>
      <div className="shopping-card-container">
        {filterItem.length >0? filterItem.map((item) => (
          <ShoppingCard
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            onClick={()=>handleFilter(cat)}
          />
        ))
        :<NotFound/>}
      </div>
    </Layout>
  )
};

export default Shopping;
