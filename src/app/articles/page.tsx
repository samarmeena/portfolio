import { GetArticles } from "./api";
import ArticleCard from "./article-card";
import styles from "./page.module.css";

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
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article: any) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
