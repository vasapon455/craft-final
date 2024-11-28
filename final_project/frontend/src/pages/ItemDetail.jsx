import "../styles/shopping.css";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const ItemDetail = () => {
  return (
    <Layout>
      <Section header="Shopping">
        <Link
          to="/promotion"
          className="paragraph black underline"
        >
          ดูโปรโมชัน
        </Link>
      </Section>
      <img src="shopping/item-detail-example.jpeg" className="item-detail-image" />
      <Container className="item-detail">
        <h2 className="sub-heading black">Hello</h2>
        <p className="paragraph black">200 บาท</p>
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
          <Link to="/cart">
            <Button variant="r ed" type="submit" className="primary-button">
              <p className="paragraph white">เพิ่มลงในตะกร้า</p>
            </Button>
          </Link>
        </Container>
      </Container>
    </Layout>
  );
};

export default ItemDetail;
