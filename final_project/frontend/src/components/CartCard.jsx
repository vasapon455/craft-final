import "../styles/cart.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const CartCard = ({ id, price, setPrice, name, quantity, buy,setBuy }) => {
  const [productData, setProductData] = useProducts();
  const usenavigate = useNavigate()
  const cartProduct = productData.filter(
    (product) => product.item_name == name
  );

  const [cartQuantity, setCartQuantity] = useState(quantity);

  const th_price = cartProduct[0].price.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });

  const itemPrice = cartProduct[0].price;

  const handleChangeQuantity = (operation) => {
    if (operation == "minus") {
      if (cartQuantity > 0) {
        setCartQuantity((prev) => prev - 1);
        setPrice((prev) => itemPrice * cartQuantity - prev);
      }
    }
    if (operation == "plus") {
      setCartQuantity((prev) => prev + 1);
      setPrice((prev) => itemPrice * cartQuantity + prev);
    }
  };

  console.log(name)


  const formData = new FormData()
  formData.append('item',id)
  formData.append('quantity',cartQuantity)

  const handleBuy = () => {
    setBuy(false);
    api
      .post("/api/order/", formData)
      .then((res) => {
        if (res.status === 201) {
          alert("สั่งซื้อสำเร็จ");
        }
        else {
          alert("ไม่สามารถสั่งซื้อได้");
        }
      })
      .catch((err) => {alert(err);});   
  };

  buy ? handleBuy() : null;

  return (
    <Container className="cart-card">
      <Row className="cart-inner">
        <Col lg={10}>
          <img
            src={cartProduct[0].image}
            style={{ objectFit: "scale-down" }}
            className="cart-card-image"
          />
        </Col>
        <Col className="cart-card-right" lg={10}>
          <h2 className="sub-heading black">{name}</h2>
          <span className="paragraph black">ราคา {th_price}</span>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              gap: "100px",
            }}
          >
            <p className="paragraph black">จำนวน</p>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => handleChangeQuantity("minus")}
              >
                <img src="/cart/minus-button.svg" />
              </button>
              <p className="paragraph black">{cartQuantity}</p>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => handleChangeQuantity("plus")}
              >
                <img src="/cart/plus-button.svg" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartCard;
