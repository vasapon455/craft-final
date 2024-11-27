import "../styles/cart.css";
import { Container, Row, Col } from "react-bootstrap";

const CartCardStatus = ({ image, name, price, quantity, status }) => {
  return (
    <Container className="cart-card">
      <Row className="cart-inner">
        <Col lg={10}>
          <div className="cart-card-image">
            <img
              src={image}
              style={{ objectFit: "scale-down" }}
              width={"350px"}
              height={"220px"}
            />
            <div
              style={{
                position: "absolute",
                width: "auto",
                backgroundColor: "yellow",
                bottom: "20px",
                left: "120px",
                borderRadius: "20px",
                padding: "5px",
                paddingLeft:"10px",
                paddingRight:"10px"
              }}
            >
              <p className="paragraph black">{status}</p>
            </div>
          </div>
        </Col>
        <Col className="cart-card-right" lg={10}>
          <h2 className="sub-heading black">{name}</h2>
          <span className="paragraph black">{price}</span>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              gap: "100px",
            }}
          >
            <p className="paragraph black">จำนวน</p>
            <p className="paragraph black">{quantity}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartCardStatus;
