import CommentIcon from "@/icons/CommentIcon";
import EyeIcon from "@/icons/EyeIcon";
import HeartIcon from "@/icons/HeartIcon";
import styles from "@/styles/ArticleCard.module.css";

const ArticleCard = ({ article }: { article: any }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p>{article.description}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <EyeIcon className={styles.icon} /> {article.page_views_count}
        </div>
        <div className={styles.stat}>
          <HeartIcon className={styles.icon} /> {article.public_reactions_count}
        </div>
        <div className={styles.stat}>
          <CommentIcon className={styles.icon} /> {article.comments_count}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
