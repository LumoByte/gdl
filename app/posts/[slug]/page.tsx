import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

// Get the post contents
const getPostContent = (slug: string) => {
    const folder = "posts/"; // grab the folder
    const file = `${folder}${slug}.md`; // get the file
    const content = fs.readFileSync(file, "utf-8"); // read the file
    const matterResult = matter(content);
    return matterResult;
};

// Defines all of the static pages - this way a 404 page is returned when someone tries to get a page that doesn't exist
export const generateStaticParams = async () => {
    const posts = getPostMetadata(); // get the metadata for all posts
    // return [{ slug: "aws-quickstart" }];
    
    // return each of the slug
    return posts.map((post) => ({
        slug: post.slug,
    }));
};
const PostPage = (props: any) => {
    const slug = props.params.slug; // params.whatever you put inside the square brackets [dynamic directory] goes here
    const post = getPostContent(slug);
    return (
        <div className="mx-auto max-w-4xl md:px-20">
            <div className="my-12 text-center">
                <h1 className="text-2x1 text-blue-400">
                    {post.data.title}
                </h1>
                <p className="text-slate-400 mt-2">{post.data.date}</p>
            </div>
            
            <article className="prose">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;