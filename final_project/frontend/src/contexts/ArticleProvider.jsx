import { createContext, useContext, useState, useEffect } from "react";
import api from "../api";

const ArticleContext = createContext([]);

const ArticleProvider = ({children}) => {
    const [articleData,setArticleData] = useState([]);
    const [commentData,setCommentData] = useState([])
    
    const getAricle = ()=>{
      api.get("/api/article/", { withCredentials: true })
      .then((res) => setArticleData(res.data))
      .catch((error) => {
        console.error("Error fetching the articles.", error);
      });
    }

    const getComment = ()=>{
      api.get("/api/article/comment/", { withCredentials: true })
      .then((res) => setCommentData(res.data))
      .catch((error) => {
        console.error("Error fetching the comments.", error);
      });
    }

    useEffect(() => {getComment()},[commentData]);

    useEffect(()=> {getAricle()}
    )
   
   return  <ArticleContext.Provider value={[articleData,commentData]}>{children}</ArticleContext.Provider>;
  }

export default ArticleProvider;

export const useArticles = () => useContext(ArticleContext);