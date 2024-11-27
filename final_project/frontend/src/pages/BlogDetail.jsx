import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import CommentCard from "../components/CommentCard";

const BlogDetail = () => {
  const commentData = [
    {
      id: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisl vitae porttitor dignissim. Etiam euismod sapien ac fringilla molestie. Nulla et interdum odio, pulvinar blandit nisl. Praesentbero Lorem ipsum dolor sit amet,",
      author: "A",
      commentedDate: "20/12/2024",
    },
    {
      id: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisl vitae porttitor dignissim. Etiam euismod sapien ac fringilla molestie. Nulla et interdum odio, pulvinar blandit nisl. Praesentbero Lorem ipsum dolor sit amet,",
      author: "A",
      commentedDate: "20/12/2024",
    },
    {
      id: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisl vitae porttitor dignissim. Etiam euismod sapien ac fringilla molestie. Nulla et interdum odio, pulvinar blandit nisl. Praesentbero Lorem ipsum dolor sit amet,",
      author: "A",
      commentedDate: "20/12/2024",
    },
    {
      id: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisl vitae porttitor dignissim. Etiam euismod sapien ac fringilla molestie. Nulla et interdum odio, pulvinar blandit nisl. Praesentbero Lorem ipsum dolor sit amet,",
      author: "A",
      commentedDate: "20/12/2024",
    },
  ];

  return (
    <Layout>
      <Section header="BlogName">
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "Kanit",
              color: "black",
              textDecoration: "underline",
            }}
          >
            +แก้ไข
          </Link>
          <Link
            to="/"
            style={{
              fontFamily: "Kanit",
              color: "black",
              textDecoration: "underline",
            }}
          >
            +ลบ
          </Link>
        </Container>
        <img src="./article1.jpeg" />
        <div className="text-container">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed libero consectetur, consequat ligula a, iaculis enim. Etiam
            dictum neque non tristique auctor. Pellentesque aliquam mauris at
            nulla malesuada consequat. Aliquam vitae lectus in diam fermentum
            dignissim at id risus. Suspendisse commodo vitae nibh vel laoreet.
            Morbi odio mi, volutpat et augue ac, consequat ornare ante. Nulla
            ipsum leo, rhoncus eu nibh sed, ullamcorper tempus lacus. Sed augue
            diam, congue sit amet eros sodales, tempor sodales arcu. Aenean
            gravida sapien nibh, at dignissim neque pellentesque eget. Integer
            mollis at libero at sagittis. Donec elit diam, blandit quis magna
            consectetur, ultrices pulvinar justo. Fusce nisi massa, faucibus nec
            consequat et, lobortis dictum augue. Duis dolor leo, mattis sit amet
            magna in, dictum tristique eros. Morbi et tincidunt augue. In
            aliquet turpis ligula, sed cursus purus molestie id.
          </p>
        </div>
      </Section>
      <section className="comment">
        <p>Comment</p>
        {commentData.map((comment) => (
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

export default BlogDetail;
