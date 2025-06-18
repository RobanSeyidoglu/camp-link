import PostForm from "@/app/(components)/PostForm";
const getPostById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get post");
  }
  return res.json();
};
let updatePostData = {};
const PostsPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updatePostData = await getPostById(params.id);
    updatePostData = updatePostData.foundPost;
  } else {
    updatePostData = {
      _id: "new",
    };
  }
  return <PostForm post={updatePostData} />;
};

export default PostsPage;
