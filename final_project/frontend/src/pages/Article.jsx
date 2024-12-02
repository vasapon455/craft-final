import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ArticleCard from "../components/ArticleCard";
import { Link } from "react-router-dom";
import { useArticles } from "../contexts/ArticleProvider";
import NotFound from "../components/NotFound";
import { Container } from "react-bootstrap";

const Article = () => {
  const [data , comment] = useArticles();
  let number = 1

  return (
    <Layout>
      {data ? (
        <Section header="Article">
          <section id="article">
            <Container style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "center",
              alignContent: "center",
            }}>
            <Link
              to="/article/new"
              style={{
                textDecoration: "underline",
              }}
              className="paragraph black"
            >
              +โพสใหม่
            </Link>
            </Container>
            {data.length > 0 ? (
              data.map((data) => {
                return <ArticleCard
                  id={data.id}
                  number={number++}
                  image={data.image}
                  header={data.title}
                  createdDate={data.created_at}
                  summary={data.content}
                />;
              })
            ) : (
              <NotFound />
            )}
          </section>
        </Section>
      ) : (
        <NotFound />
      )}
    </Layout>
  );
};

export default Article;
