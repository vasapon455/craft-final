import "../styles/article.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../api";

const ArticleCard = ({image, header, createdDate, summary, id }) => {

  const formatDate = createdDate.slice(0,10)
  console.log(image)
  return (
      <Container className="article-card" id={id}>
        <Link to={`/article/${id}`} className="link">
        <Row className="article-inner">
          <Col lg={4}>
            <div className="article-card-image">
              <img src={image} width={"100%"} height={"100%"}/>
            </div>
          </Col>
          <Col className="article-card-right" lg={8}>
            <h2 className="heading2 white">{header}</h2>
            <span className="paragraph white">{formatDate}</span>
            <p className="paragraph white">{summary}</p>
          </Col>
        </Row>'
         </Link>
      </Container>
     
  );
};

export default ArticleCard;
