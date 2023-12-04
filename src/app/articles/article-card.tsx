import CommentIcon from "@/icons/CommentIcon";
import EyeIcon from "@/icons/EyeIcon";
import HeartIcon from "@/icons/HeartIcon";

import type { IArticle } from "./api.types";

const ArticleCard = ({ article }: { article: IArticle }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col no-underline text-white transition-all duration-300 p-3 rounded hover:shadow-md hover:shadow-black bg-[var(--article-bg)]"
    >
      <div className="px-0 py-4">
        <h3 className="text-[color:var(--accent-color)] text-lg mb-4">
          {article.title}
        </h3>
        <p>{article.description}</p>
      </div>
      <div className="flex text-[1] mt-auto">
        <div className="flex items-center mr-4">
          <EyeIcon className="text-[color:var(--accent-color)] h-4 w-6 mr-1" />{" "}
          {article.page_views_count}
        </div>
        <div className="flex items-center mr-4">
          <HeartIcon className="text-[color:var(--accent-color)] h-4 w-6 mr-1" />{" "}
          {article.public_reactions_count}
        </div>
        <div className="flex items-center mr-4">
          <CommentIcon className="text-[color:var(--accent-color)] h-4 w-6 mr-1" />{" "}
          {article.comments_count}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
