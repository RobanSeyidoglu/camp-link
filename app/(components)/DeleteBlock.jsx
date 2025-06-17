"use client";
import { FaDeleteLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  async function deletePost() {
    const confirmed = confirm("Are you sure you want to delete this?");
    if (!confirmed) return;

    try {
      const res = await fetch(`http://localhost:3000/api/Posts/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } else {
        console.error("Delete failed");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  return (
    <FaDeleteLeft
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deletePost}
    />
  );
};

export default DeleteBlock;
