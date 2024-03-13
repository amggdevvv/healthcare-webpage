"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ArticlePage() {
  const [articleData, setArticleData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  console.log("Query parameter==>", id);

  useEffect(() => {
    if (id) {
      const article = articlesData.find((article) => article.id === id);
      setArticleData(article);
    }
  }, [id]);
  return (
    <div className="h-screen w-full">
      <h1>Test</h1>
    </div>
  );
}

export default ArticlePage;
