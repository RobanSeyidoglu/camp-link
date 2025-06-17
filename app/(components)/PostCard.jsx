import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";

const PostCard = ({ post }) => {
  function name(params) {}
  return (
    <div className="flex flex-col bg-gray-800 hover:bg-gray-700 rounded-xl shadow-2xl p-4 m-2 text-white transition-shadow duration-200">
      <div className="flex mb-3">
        <PriorityDisplay priority={post.priority} />
        <div className="ml-auto">
          <DeleteBlock id={post._id} />
        </div>
      </div>
      <Link href={`/PostsPage/${post._id}`}>
        <h4 className="text-xl font-semibold text-gray-100">{post.title}</h4>
        <hr className="h-px border-0 bg-gray-600 my-2" />
        <p className="text-sm text-gray-300">{post.description}</p>

        <div className="flex-grow" />

        <div className="flex justify-between items-end mt-4">
          <p className="text-xs text-gray-400">{post.createdAt}</p>
          <div className="flex cursor-pointer">
            <StatusDisplay status={post.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
