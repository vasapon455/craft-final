import NavBar from "./NavBar";
import Footer from "./Footer";

const Base = (props) => {
  return (
    <>
      <NavBar />
      <section>
        <h1>{props.header}</h1>
      </section>
      <Footer />
    </>
  );
};

export default Base;