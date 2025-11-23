import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded bg-white mb-4">
      <h2 className="font-bold">{name}</h2>
      <p>{email}</p>
      <p>{address.street}, {address.city}</p>
    </div>
  );
}
