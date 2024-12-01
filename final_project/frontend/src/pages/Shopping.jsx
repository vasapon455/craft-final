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
  "Kogal",
  "Kimono",
  "Gyaru",
  "Mori Kei",
  "Visual Kei",
  "Sukajan",
];


const Shopping = () => {
  const [productData,setProductData] = useProducts();
  const [filterData, setFilterData] = useState(productData)


  const handleFilter = (cat) => {
    if(cat != 'All'){
    const filtered = productData.filter((item)=> item.category == cat)
    console.log(filtered)
    setFilterData(filtered)
  } else{
    setFilterData(productData)
   }
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
              <ShoppingFilter name={cat} onClicked={handleFilter}  />
            ))}
          </div>
        </section>
      </Section>
      <div className="shopping-card-container">
      {filterData.length >0?
      filterData.map(item =>
          <ShoppingCard
            id={item.id}
            image={item.image}
            name={item.item_name}
            price={item.price}
            trigger={filterData}
          />
        ): <NotFound/>} 
        
      </div>
    </Layout>
  )
};

export default Shopping;
