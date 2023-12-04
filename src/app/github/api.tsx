"use server";

import type { IGitHubRepo, IGitHubUser } from "./api.types";

export default async function GetGitHub() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  );
  const user = (await userRes.json()) as IGitHubUser;

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
  );

  let repos = (await repoRes.json()) as IGitHubRepo[];
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return { user, repos };
}
