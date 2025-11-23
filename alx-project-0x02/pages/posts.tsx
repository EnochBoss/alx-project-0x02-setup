import PostCard from "../components/common/PostCard";
import Header from "@/components/layout/Header";

export default function Posts({ posts }: any) {
  return (
    <>
      <Header />
      <div className="p-6">
        {posts.map((p: any) => (
          <PostCard key={p.id} title={p.title} body={p.body} userId={p.userId} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
}
