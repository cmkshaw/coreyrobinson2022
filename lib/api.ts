import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const mediaDirectory = join(process.cwd(), "_media"),
  publicationsDirectory = join(process.cwd(), "_publications");

export function getPubSlugs() {
  return fs.readdirSync(publicationsDirectory);
}

export function getMediaSlugs() {
  return fs.readdirSync(mediaDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = [], directory) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPublications(fields: string[] = []) {
  const slugs = getPubSlugs();
  const pubs = slugs
    .map((slug) => getPostBySlug(slug, fields, publicationsDirectory))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return pubs;
}

export function getLatestPublication(fields: string[] = []) {
  const slugs = getPubSlugs();
  const pubs = slugs
    .map((slug) => getPostBySlug(slug, fields, publicationsDirectory))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return pubs[0];
}

// Todo get latest publication
// Reduce repetition

export function getAllMedia(fields: string[] = []) {
  const slugs = getMediaSlugs();
  const media = slugs
    .map((slug) => getPostBySlug(slug, fields, mediaDirectory))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return media;
}

export function getLatestMedia(fields: string[] = []) {
  const slugs = getMediaSlugs();
  const media = slugs
    .map((slug) => getPostBySlug(slug, fields, mediaDirectory))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return media[0];
}
