import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";

const PostCard = () => {
  return (
    <div className="flex flex-col bg-gray-800 hover:bg-gray-700 rounded-xl shadow-2xl p-4 m-2 text-white transition-shadow duration-200">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>

      <h4 className="text-xl font-semibold text-gray-100">Post Title</h4>
      <hr className="h-px border-0 bg-gray-600 my-2" />
      <p className="text-sm text-gray-300">This is the post description</p>

      <div className="flex-grow" />

      <div className="flex justify-between items-end mt-4">
        <p className="text-xs text-gray-400">16/06/2025</p>
        <div className="flex cursor-pointer">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
