import { Container } from "react-bootstrap"

const ShoppingCard = ({image,name,price})=>{
    return <Container className="shopping-card">
          <img src={image}/>
          <h2 className="shopping-name">{name}</h2>
          <p className="shopping-price">{price}</p>
    </Container>
}

export default ShoppingCard;