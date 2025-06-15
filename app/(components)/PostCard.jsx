import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";

const PostCard = () => {
  return (
    <div className="flex flex-col bg-gray-600 hover:bg-gray-400 rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="text-xl font-bold">Post Title</h4>
      <hr className="h-px border-0 bg-gray-800 mb-2" />
      <p className="text-sm">This is the post description</p>
      <div className="flex-grow"></div>
      <div className="flex  justify-between">
        <p className="text-xs my-1">16/06/2025</p>
        <div className="flex cursor-pointer">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
