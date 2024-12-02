import "../styles/cart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const CartCardStatus = ({ image, name, price, quantity, status }) => {

  const [checkStatus,setCheckStatus] = useState("")




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
                backgroundColor: status === 'กำลังจัดส่ง' ? 'yellow' : status == 'ยกเลิก' ? 'grey':status == 'จัดส่งไม่สำเร็จ' ?'red':'green',
                bottom: "20px",
                left: "0px",
                right: "0px",
                borderRadius: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "5px",
                paddingBottom:"5px",
                marginInline: "auto", 
                width: "fit-content",
                textAlign:"center"
              }}
            >
              <p className={status == 'กำลังจัดส่ง' ? "caption black": "caption white"}>{status}</p>
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
