import "../styles/shopping.css";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useProducts } from "../contexts/ProductProvider";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartProvider";
import api from "../api";

const ItemDetail = ({ id }) => {
  const [productData, setProductData] = useProducts();
  const { item_id } = useParams();

  const data = productData.filter((product) => product.id == item_id);

  const th_price = data[0].price.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });

  const navigate = useNavigate();

  const formData = new FormData()
  formData.append('item',item_id)
  formData.append('quantity',1)


  const handleSubmit = async (e) => {
    e.preventDefault();
    api
      .post("/api/cart-items/", formData)
      .then((res) => {
        if (res.status === 201) {
          alert("เพิ่มลงในตะกร้าแล้ว!");
          navigate("/cart");
        } else {
          alert("ไม่สามารถเพิ่มลงในตะกร้าได้");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <Layout>
      <Section header="Shopping">
        <Link to="/promotion" className="paragraph black underline">
          ดูโปรโมชัน
        </Link>
      </Section>
      <img src={data[0].image} className="item-detail-image" />
      <Container className="item-detail">
        <h2 className="sub-heading black">{data[0].item_name}</h2>
        <p className="paragraph black">ราคา {th_price}</p>
        <p className="paragraph black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
          libero consectetur, consequat ligula a, iaculis enim. Etiam dictum
          neque non tristique auctor. Pellentesque aliquam mauris at nulla
          malesuada consequat. Aliquam vitae lectus in diam fermentum dignissim
          at id risus. Suspendisse commodo vitae nibh vel laoreet. Morbi odio
          mi, volutpat et augue ac, consequat ornare ante. Nulla ipsum leo,
          rhoncus eu nibh sed, ullamcorper tempus lacus. Sed augue diam, congue
          sit amet eros sodales, tempor sodales arcu. Aenean gravida sapien
          nibh, at dignissim neque pellentesque eget. Integer mollis at libero
          at sagittis. Donec elit diam, blandit quis magna consectetur, ultrices
          pulvinar justo. Fusce nisi massa, faucibus nec consequat et, lobortis
          dictum augue. Duis dolor leo, mattis sit amet magna in, dictum
          tristique eros. Morbi et tincidunt augue. In aliquet turpis ligula,
          sed cursus purus molestie id.
        </p>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <Button
            variant="red"
            type="submit"
            className="primary-button"
            onClick={handleSubmit}
          >
            <p className="paragraph white">เพิ่มลงในตะกร้า</p>
          </Button>
        </Container>
      </Container>
    </Layout>
  );
};

export default ItemDetail;
