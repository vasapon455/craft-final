import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section";

import CommentCard from "../components/CommentCard";
import NotFound from "../components/NotFound";

import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useArticles } from "../contexts/ArticleProvider";

const ArticleDetail = () => {
  const [articles , comment] = useArticles();
  const {article_id} = useParams();

  const item = articles[article_id-1]
  
  console.log(item,article_id,comment)
  
  return (
    <Layout>
      {item?
      (<Section header={item.title}>
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
        <img src={item.image} width="1000px" height="auto" />
        <div className="text-container">
          <p className="paragraph black">{item.content}</p>
        </div>
      </Section>)
      : (<NotFound/>)}
      {comment.length >0 ? 
      <section className="comment">
        <p className="paragraph black">Comment</p>
        {comment.map((comment) => (
          <CommentCard
            id={comment.id}
            comment={comment.comment_text}
            author={comment.author}
            commentedDate={comment.date_created}
          />
        ))}  
      </section>
      : <NotFound/>}
    </Layout>
  );
};

export default ArticleDetail;
