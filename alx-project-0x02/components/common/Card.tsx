import { type CardProps } from "../../interfaces/index";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
