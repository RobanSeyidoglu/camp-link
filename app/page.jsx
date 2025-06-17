import PostCard from "./(components)/PostCard";

const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Posts", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get posts", error);
  }
};

const Dashboard = async () => {
  const { posts } = await getPosts();

  // Use the correct property name here (e.g. category)
  const uniqueCategories = [...new Set(posts?.map(({ category }) => category))];

  return (
    <div className="p-5">
      <div>
        {posts &&
          uniqueCategories?.map((uniqueCategory, catInx) => (
            <div key={catInx} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {posts
                  .filter((post) => post.category === uniqueCategory)
                  .map((filteredPost) => (
                    <PostCard
                      id={filteredPost._id}
                      key={filteredPost._id}
                      post={filteredPost}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
