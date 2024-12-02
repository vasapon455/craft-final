import "../styles/promotion.css"
import Layout from "../components/Layout";
import Section from "../components/Section";

const Promotion = () => {
  return (
    <Layout>
      <Section header="Promotion"></Section>
    <section className="promotion-container">
        <img src="/home/promotion1.jpeg" height='auto' width='100%'></img>
        <img src="/home/promotion2.jpeg"height='auto' width='100%'></img>
        <img src="/home/promotion3.jpeg"height='auto' width='100%'></img>
    </section>
    </Layout>
  );
};

export default Promotion;
