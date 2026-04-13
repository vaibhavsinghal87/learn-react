import type { Route } from "./+types/details";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const product = await res.json();
  return product;
}

function PostDetailsPage({ loaderData, params }: Route.ComponentProps) {
  console.log("Post details page - ", loaderData);
  return <h1>Post Details Page - {params.id}</h1>;
}
export default PostDetailsPage;
