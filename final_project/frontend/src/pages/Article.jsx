import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ArticleCard from "../components/ArticleCard";
import {  Link } from "react-router-dom";
import { useState,useEffect } from "react";
import api from "../api";
const Article = () => {

  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    api
      .get("/api/article/", { withCredentials: true })
      .then((res) => setArticleData(res.data))
      .catch((error) => {
        console.error("Error Fetching the article.", error);
      });
  }, [articleData]);

console.log(articleData)

  return (
    <Layout>
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
          {articleData.map((data)=>
            <ArticleCard
              id={data.id}
              image={data.image}
              link={data.id}
              header={data.title}
              createdDate={data.created_at}
              summary={data.content}
            />
         ) }
        </section>
      </Section>
    </Layout>
  );
};

export default Article;
