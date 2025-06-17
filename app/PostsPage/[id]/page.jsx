import PostForm from "@/app/(components)/PostForm";

const PostsPage = async ({ params }) => {
  const { id } = await params;
  return <PostForm/>;
};

export default PostsPage;
