import { useEffect } from "react";
import type { Route } from "../+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const now = new Date().toISOString();
  if (typeof window === undefined) {
    console.log("Server - Vaibhav", now);
  } else {
    console.log("Client - ", now);
  }
  // React Hooks
  useEffect(() => {
    console.log(
      "Hooks run after client is hydrated. Hooks can't run on server - ",
      window.scrollX,
    );
  });
  return <>Home Page</>;
}
