import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    // only grab files that end in .md
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    // // remove the .md for the slugs in the URL
    // const slugs = markdownPosts.map((file) => file.replace(".md", ""));
    // return slugs;

    // Get gray-matter
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });
    posts.reverse(); // reverse the sorting so the latest blog post shows up first
    return posts;
};

export default getPostMetadata;