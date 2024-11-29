import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Container } from "react-bootstrap";
import CommentCard from "../components/CommentCard";

const ArticleDetail = () => {
  const article_id = useParams()
  const [articleData, setArticleData] = useState([]);
  
  useEffect(() => {
    api
      .get(`/article/${article_id}/`, { withCredentials: true })
      .then((response) => {
        setArticleTitle(response.data.title);
      })
      .catch((error) => {
        console.error("Error Fetching the article.", error);
      });
  }, [articleData]);


  let data = articleData.filter((data) => (data.id = article_id));
  console.log(data)

  return (
    <Layout>
      <Section header={`${data[0].title}`}>
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
          <p className="paragraph black">{data[0].content}</p>
        </div>
      </Section>
      <section className="comment">
        <p className="paragraph black">Comment</p>
        {data[0].comment.map((comment) => (
          <CommentCard
            id={comment.id}
            comment={comment.comment}
            author={comment.author}
            commentedDate={comment.commentedDate}
          />
        ))}
      </section>
    </Layout>
  );
};

export default ArticleDetail;
