const PostsPage = async ({ params }) => {
  const { id } = await params;
  return <div>PostsPag {id}</div>;
};

export default PostsPage;
