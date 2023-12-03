"use client";

import Image from "next/image";
import GitHubCalendar from "react-github-calendar";

import RepoCard from "./repo-card";
import styles from "./view.module.css";

interface Props {
  repos: any;
  user: any;
}

const GithubPageView: React.FC<Props> = ({ user, repos }) => {
  if (!process.env.NEXT_PUBLIC_GITHUB_USERNAME) {
    throw Error("env NEXT_PUBLIC_GITHUB_USERNAME does not exist");
  }

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo: any) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className="max-lg:hidden">
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            hideColorLegend
            hideMonthLabels
          />
        </div>
      </div>
    </>
  );
};

export default GithubPageView;
