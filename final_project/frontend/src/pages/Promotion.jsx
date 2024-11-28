import "../styles/promotion.css"
import Layout from "../components/Layout";
import Section from "../components/Section";

const Promotion = () => {
  return (
    <Layout>
      <Section header="Promotion"></Section>
    <section className="promotion-container">
        <img src="/article/article1.jpeg"></img>
        <img src="/article/article1.jpeg"></img>
        <img src="/article/article1.jpeg"></img>
        <img src="/article/article1.jpeg"></img>
        <img src="/article/article1.jpeg"></img>
        <img src="/article/article1.jpeg"></img>
    </section>
    </Layout>
  );
};

export default Promotion;
