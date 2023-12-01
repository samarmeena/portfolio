import data from "./projects.json";

export type Project = (typeof data)[number];

export async function GetProjects() {
  return data;
}
