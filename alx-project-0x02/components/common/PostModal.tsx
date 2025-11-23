import { useState } from "react";

export default function PostModal({ onClose, onSubmit }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="font-bold text-xl mb-4">Create Post</h2>

        <input className="border p-2 w-full mb-3"
          placeholder="Title" value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea className="border p-2 w-full mb-3"
          placeholder="Content" value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => onSubmit({ title, content })}
        >
          Submit
        </button>

        <button className="ml-3 text-red-500" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
