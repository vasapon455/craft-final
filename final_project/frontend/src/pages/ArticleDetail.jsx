import React from "react";

import Layout from "../components/Layout";
import Section from "../components/Section";

import CommentCard from "../components/CommentCard";
import NotFound from "../components/NotFound";

import { useParams, Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { useArticles } from "../contexts/ArticleProvider";
import NewCommentCard from "../components/NewCommentCard";
import { ACCESS_TOKEN } from "../constants";

const ArticleDetail = () => {
  const [articles, comments] = useArticles();
  const { article_id } = useParams();

  const item = articles[article_id - 1];
  const this_comment = comments.filter(
    (comment) => comment.commented_post == item.title
  );
  let number = 1;
  
  return (
    <Layout>
      {item ? (
        <Section header={item.title}>
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
          <img src={item.image} width="100%" height="auto" />
          <div className="text-container">
            <p className="paragraph black">{item.content}</p>
          </div>
        </Section>
      ) : (
        <NotFound />
      )}
      {this_comment.length > 0 ? (
        <section className="comment">
          <p className="paragraph black">Comment</p>
          {this_comment.map((comment) => (
            <CommentCard
              id={number++}
              comment={comment.comment_text}
              author={comment.author}
              commentedDate={comment.date_created}
            />
          ))}
          {localStorage.getItem(ACCESS_TOKEN) ? (
            <NewCommentCard page={item.title} />
          ) : null}
        </section>
      ) : (
        <NotFound />
      )}
    </Layout>
  );
};

export default ArticleDetail;
