import "../styles/cart.css";
import { Container, Row, Col, Button } from "react-bootstrap";


const CartCard = ({image, name, price, quantity }) => {
  return (
      <Container className="cart-card">
        <Row className="cart-inner">
          <Col lg={10}>
            
              <img src={image} style={{objectFit: "scale-down"}} className="cart-card-image"  /> 
         
          </Col>
          <Col className="cart-card-right" lg={10}>
            <h2 className="sub-heading black">{name}</h2>
            <span className="paragraph black">{price}</span>
            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center',gap:'100px'}}>
            <p className="paragraph black">จำนวน</p>
            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center',gap:'10px'}}>
            <button style={{backgroundColor:"transparent",border:"none"}}>
            <img src="./minus-button.svg"/> 
            </button >
            <p className="paragraph black">{quantity}</p>
            <button style={{backgroundColor:"transparent",border:"none"}}>
             <img src="./plus-button.svg"/>
             </button>
             </div>
            </div>
          </Col>
        </Row>
      </Container>
     
  );
};

export default CartCard;
