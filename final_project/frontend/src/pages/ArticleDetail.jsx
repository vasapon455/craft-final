import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Container } from "react-bootstrap";
import { useArticles } from "../contexts/ArticleProvider";
import CommentCard from "../components/CommentCard";
import NotFound from "../components/NotFound";

const ArticleDetail = () => {
  const article_id = useParams();
  const articleData = useArticles();
  const data = articleData.filter((data)=> data.id = article_id)
  
  return (
    <Layout>
      {articleData.length > 0?
      <Section header={`${articleData.title}`}>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "underline",
            }}
            className="paragraph black"
          >
            +แก้ไข
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "underline",
            }}
            className="paragraph black"
          >
            +ลบ
          </Link>
        </Container>
        <img src="./article1.jpeg" />
        <div className="text-container">
          <p className="paragraph black">{articleData.content}</p>
        </div>
      </Section>
      : <NotFound/>}
      {articleData.comment.length >0 ? 
      <section className="comment">
        <p className="paragraph black">Comment</p>
        {data.map((comment) => (
          <CommentCard
            id={comment.id}
            comment={comment.comment}
            author={comment.author}
            commentedDate={comment.commentedDate}
          />
        ))}  
      </section>
      : <NotFound/>}
    </Layout>
  );
};

export default ArticleDetail;
