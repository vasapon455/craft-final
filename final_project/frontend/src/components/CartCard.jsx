import "../styles/cart.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const CartCard = ({ id, price, setPrice, name, quantity,buy,setBuy }) => {
const [productData, setProductData] = useProducts();
  
const cartProduct = productData.filter((product)=> product.id === name)

const [cartQuantity, setCartQuantity] = useState(quantity);


const itemPrice = cartProduct[0].price;

const th_price = itemPrice.toLocaleString("th-TH", {
  style: "currency",
  currency: "THB",
});

const formData = new FormData()
formData.append('item',id)
formData.append('quantity',cartQuantity)

  const handleDelete = (id) =>{
    api.delete(`/api/cart-items/${id}`).then((res) => {
      if (res.status === 204) {
        alert("เอาออกจากตระกร้่าแล้ว!");
      }
      else alert("ไม่สามารถเอาออกจากตระกร้าได้");
  })
  .catch((error) => alert(error));
  }


  const handleChange = (id)=>{
    api
    .patch(`/api/cart-items/${id}/update`,update, formData, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.status === 200) {
        alert("อัพเดทแล้ว");
      } else alert("ยังไม่อัพเดท");
    })
    .catch((error) => alert(error));
  }

  const handleChangeQuantity = (operation,id) => {
    if (operation == "minus") {
      if (cartQuantity > 1) {
        setCartQuantity((prev) => prev - 1)
        handleChange(id)
      } else {
           handleDelete(id)
      }
    }
    if (operation === "plus") {
      setCartQuantity((prev) => prev + 1)
      handleChange(id)
    }
  };

  const handleBuy = (id) => {
    setBuy(false);
    api
      .post("/api/order/", {'item':id})
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

  buy ? handleBuy(id) : null;
  
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
          <h2 className="sub-heading black">{cartProduct[0].item_name}</h2>
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
                onClick={() => handleChangeQuantity("minus",id)}
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
