import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ArticleCard from "../components/ArticleCard";
import { Link } from "react-router-dom";
import { useArticles } from "../contexts/ArticleProvider";
import NotFound from "../components/NotFound";

const Article = () => {
  const [data , comment] = useArticles();

  return (
    <Layout>
      {data ? (
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
            {data.length > 0 ? (
              data.map((data) => {
                return <ArticleCard
                  id={data.id}
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
