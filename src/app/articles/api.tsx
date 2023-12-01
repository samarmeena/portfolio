"use server";

export async function GetArticles() {
  if (!process.env.DEV_TO_API_KEY) {
    throw Error("env DEV_TO_API_KEY does not exist");
  }
  console.log(process.env.DEV_TO_API_KEY);

  const res = await fetch(
    "https://dev.to/api/articles/me/published?per_page=6",
    {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    },
  );

  const data = await res.json();

  return data;
}
