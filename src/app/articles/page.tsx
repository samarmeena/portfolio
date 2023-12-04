import "./page.css";

import { GetArticles } from "./api";
import ArticleCard from "./article-card";

const ArticlesPage = async () => {
  const articles = await GetArticles();

  return (
    <>
      <h3>
        Recent Posts from{" "}
        <a
          href="https://dev.to/samarmeena"
          target="_blank"
          rel="noopener"
          className="underline-effect"
        >
          dev.to
        </a>
      </h3>
      <div className="grid md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 mt-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
