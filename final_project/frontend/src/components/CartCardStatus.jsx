import "../styles/cart.css";
import { Container, Row, Col } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";

const CartCardStatus = ({ image, name,date, quantity, status }) => {

  const [productData,setProductData] = useProducts()
  const product = productData.filter((product)=> product.id == name)
  console.log(name)

  const th_price = (product[0].price * quantity).toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });

  const formatDate = date.slice(0,10)

  return (
    <Container className="cart-card">
      <Row className="cart-inner">
        <Col lg={10}>
          <div className="cart-card-image">
          <span className="caption black" style={{position: "absolute"}}>{formatDate} </span>
            <img
              src={product[0].image}
              style={{ objectFit: "scale-down" }}
              width={"350px"}
              height={"220px"}
            />
            <div
              style={{
                position: "absolute",
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
          <h2 className="sub-heading black">{product[0].item_name} </h2>
          <span className="paragraph black">{th_price}</span>
    
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
