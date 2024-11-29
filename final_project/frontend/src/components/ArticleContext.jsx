import { createContext } from "react";
import { useState, useEffect } from "react";

const ArticleContext = createContext("");

const ArticleProvider = ({ children }) => {
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
    <ArticleContext.Provider value={articleData}>
      {children}
    </ArticleContext.Provider>
  );
};

export {ArticleContext,ArticleProvider}
