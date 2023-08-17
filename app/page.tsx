import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
    const postMetadata = getPostMetadata();
    
    // Return each new post preview into a div
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2 gap-4">{postPreviews}</div>;
};

export default HomePage;