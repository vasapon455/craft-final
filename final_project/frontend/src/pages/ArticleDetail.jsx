import React, { useState } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import CommentCard from "../components/CommentCard";
import NotFound from "../components/NotFound";
import { useParams, Link,useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { useArticles } from "../contexts/ArticleProvider";
import NewCommentCard from "../components/NewCommentCard";
import { ACCESS_TOKEN } from "../constants";
import api from "../api";

const ArticleDetail = () => {
  const [articles, comments] = useArticles();
  const { article_id } = useParams();
  const item = articles[article_id-1];
  const navigate = useNavigate()
  const [newtitle,setNewTitle] = useState(item.title)
  const [newcontent,setNewContent] = useState(item.content)
  const [edit,setEdit] = useState(false)


  const this_comment = comments.filter(
    (comment) => comment.commented_post == item.title
  );
  let number = 1;
  
  console.log(localStorage.getItem(ACCESS_TOKEN))

  const handleDelete = (item) =>{
    api.delete(`/api/article/${item}/`).then((res) => {
      if (res.status === 204) {
        navigate('/article');
        alert("ลบบทความแล้ว!");
      }
      else alert("ไม่สามารถลบบทความได้");
  })
  .catch((error) => alert(error));
  }
  
  
  const formData = new FormData();
  formData.append("title", newtitle);
  formData.append("title", newcontent);
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
              style={{
                textDecoration: "underline",
              }}
              className="paragraph black"
              to={`/article/edit/${article_id}`}
            >
              +แก้ไข
            </Link>
            <Link
              style={{
                textDecoration: "underline",
              }}
              className="paragraph black"
            onClick={()=>handleDelete(item.id)}>
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
              comment_id ={comment.id}
              comment={comment.comment_text}
              author={comment.author}
              commentedDate={comment.date_created}
            />
          ))}
        </section>
      ) : (
        <NotFound />
      )}
       {localStorage.getItem(ACCESS_TOKEN) ? (
            <NewCommentCard page={item.title} articleId ={article_id} />
          ) : null}
    </Layout>
  );
};

export default ArticleDetail;
