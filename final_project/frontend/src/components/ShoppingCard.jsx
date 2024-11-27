import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const ShoppingCard = ({image,name,price})=>{
    return <Container className="shopping-card">
          <Link to="/item-detail" className="link">
          <img src={image} className="shopping-card-image"/>
          <div style={{marginTop: "30px", marginBottom:"30px"}}>
          <h2 className="sub-heading black">{name}</h2>
          <p className="paragraph black">{price}</p>
          </div>
          </Link>
    </Container>
}

export default ShoppingCard;