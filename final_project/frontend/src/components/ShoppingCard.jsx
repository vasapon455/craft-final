import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShoppingCard = ({ image, name, price, id }) => {
  const th_price = price.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });

 const [reload,setReload] = useState(false)
   
  const handleChange=()=>{
    setReload(true)
  }


    return (
      <Container className="shopping-card">
        <Link to={`/shopping/${id}`} className="link">
          <img
            src={image}
            source={image}
            className="shopping-card-image"
            cache={false}
          />
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <h2 className="sub-heading black">{name}</h2>
            <p className="paragraph black">ราคา {th_price}</p>
          </div>
        </Link>
      </Container>
    );
  };


export default ShoppingCard;
