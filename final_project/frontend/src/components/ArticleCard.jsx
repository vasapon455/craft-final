import "../styles/article.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const ArticleCard = ({ header, createdDate, summary, id }) => {
  return (
 
      <Container className="article-card">
        <Link to={`/article/${id}`} className="link">
        <Row className="article-inner">
          <Col lg={4}>
            <div className="article-card-image">
              <img /> 
            </div>
          </Col>
          <Col className="article-card-right" lg={8}>
            <h2 className="heading2 white">{header}</h2>
            <span className="paragraph white">{createdDate}</span>
            <p className="paragraph white">{summary}</p>
          </Col>
        </Row>'
         </Link>
      </Container>
     
  );
};

export default ArticleCard;
