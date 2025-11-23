import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";

export default function Users({ users }: any) {
  return (
    <>
      <Header />
      <div className="p-6">
        {users.map((u: any) => (
          <UserCard
            key={u.id}
            name={u.name}
            email={u.email}
            address={u.address}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return { props: { users } };
}
