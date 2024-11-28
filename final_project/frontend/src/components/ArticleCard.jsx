import "../styles/article.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticleCard = ({image, header, createdDate, summary, id }) => {

  const formatDate = createdDate.slice(0,10)
   
  return (
      <Container className="article-card">
        <Link to={`/article/${id}`} className="link">
        <Row className="article-inner">
          <Col lg={4}>
            <div className="article-card-image">
              <img src={image}/>
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
