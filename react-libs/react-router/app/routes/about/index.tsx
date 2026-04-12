import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About page" }, { name: "description", content: "About" }];
}

function About() {
  console.log("About page");
  return <>About page</>;
}

export default About;
