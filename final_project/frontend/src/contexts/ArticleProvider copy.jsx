import { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

const ProductContext = createContext([]);

const ProductProvider = ({children}) => {
    const [articleData,setArticleData] = useState([]);
    useEffect(() => {
        api.get("/api/article/", { withCredentials: true })
          .then((res) => setArticleData(res.data))
          .catch((error) => {
            console.error("Error Fetching the article.", error);
          });
      }, [articleData]);

   
    
   return  <ArticleContext.Provider value={articleData}>{children}</ArticleContext.Provider>;
  }

export default ArticleProvider;

export const useArticles = () => useContext(ArticleContext);