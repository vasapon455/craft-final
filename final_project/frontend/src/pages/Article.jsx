import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ArticleCard from "../components/ArticleCard";
import { Link } from "react-router-dom";
import { useArticles } from "../contexts/ArticleProvider";
import NotFound from "../components/NotFound";

const Article = () => {
  const articleData = useArticles();

  return (
    <Layout>
      {articleData ? (
        <Section header="Article">
          <section id="article">
            <Link
              to="/"
              style={{
                fontFamily: "Kanit",
                color: "black",
                textDecoration: "underline",
                fontSize: "24px",
              }}
            >
              +โพสใหม่
            </Link>
            {articleData.length > 0 ? (
              articleData.map((data) => {
                <ArticleCard
                  id={data.id}
                  image={data.image}
                  link={data.id}
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
