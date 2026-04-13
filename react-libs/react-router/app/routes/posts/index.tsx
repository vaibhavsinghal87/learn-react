import { Link } from "react-router";
import type { Route } from "./+types/index";

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

export function meta({}: Route.MetaArgs) {
  return [{ title: "Posts page" }, { name: "description", content: "Posts" }];
}

function Posts({ loaderData }: Route.ComponentProps) {
  const posts = loaderData as unknown as any[];
  console.log("Posts page - ", posts);
  return (
    <>
      <h2 className="text-3xl font-bold mb-5">Posts</h2>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}/details`}>
          <div key={post.id} className="border p-4 rounded mb-4">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Posts;
