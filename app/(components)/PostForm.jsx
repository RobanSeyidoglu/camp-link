"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PostForm = () => {
  const router = useRouter();

  const startingPostData = {
    title: "",
    description: "",
    priority: 1,
    status: "not started",
    category: "Government Emails",
  };

  const [formData, setFormData] = useState(startingPostData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("/api/Posts", {
        method: "POST",

        "Content-Type": "application/json",
        body: JSON.stringify({ formData }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Server error:", errorData);
        throw new Error("Failed to create post");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Error submitting post:", error.message);
      alert("Failed to create post");
    }
  }

  return (
    <div className="flex justify-center items-start bg-gray-900 text-white pt-5 px-4 overflow-auto">
      <form
        className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-lg space-y-4"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl font-bold text-center">Share a Post!</h3>

        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1 text-sm text-gray-300">
            Title
          </label>
          <input
            className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            required
            value={formData.title}
            placeholder="Enter a title"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1 text-sm text-gray-300">
            Description
          </label>
          <textarea
            className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="description"
            name="description"
            onChange={handleChange}
            required
            value={formData.description}
            placeholder="Enter a description"
            rows={5}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1 text-sm text-gray-300">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Government Emails">Government Emails</option>
            <option value="Transfer">Transfer</option>
            <option value="Intigration Courses">Intigration Courses</option>
            <option value="Normal Emails">Normal Emails</option>
          </select>
        </div>

        <label htmlFor="priority" className="text-sm text-gray-300">
          Priority
        </label>
        <div className="flex items-center space-x-6">
          {[1, 2, 3, 4, 5].map((num) => (
            <label
              key={num}
              htmlFor={`priority-${num}`}
              className="flex items-center cursor-pointer"
            >
              <input
                type="radio"
                id={`priority-${num}`}
                name="priority"
                onChange={handleChange}
                value={num}
                checked={formData.priority == num}
                className="accent-blue-500 mr-1"
              />
              {num}
            </label>
          ))}
        </div>

        <div className="flex flex-col">
          <label htmlFor="status" className="mb-1 text-sm text-gray-300">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            id="status"
            onChange={handleChange}
            className="bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="not started">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
        </div>

        <input
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-lg w-full py-3 font-semibold text-white transition-colors"
          value="Share Post"
        />
      </form>
    </div>
  );
};

export default PostForm;
