'use client'
import { useState } from 'react';
import { createArticles } from '../utilities/utilities';

interface ArticlesData {
    id: number;
    title:string;
    description: string;
    created_at: Date;
    updated_at: Date;
    content:string
    lactationist:string
}
const useCreateArticles = (articleData: ArticlesData) => {
  const [user, setArticle] = useState<ArticlesData>(articleData);
  const handleRegister = async() =>{
      const response = await createArticles(articleData)
      console.log({response});
      setArticle(response)
}
  return { handleRegister, user };
};
export default useCreateArticles;