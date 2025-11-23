import { PostProps } from "@/interfaces";
// "form"

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border p-4 mb-4 rounded bg-white">
      {/* "form" */}
      <h2 className="font-bold">{title}</h2>
      <p>{body}</p>
      <span className="text-gray-500 text-sm">User: {userId}</span>
    </div>
  );
}
