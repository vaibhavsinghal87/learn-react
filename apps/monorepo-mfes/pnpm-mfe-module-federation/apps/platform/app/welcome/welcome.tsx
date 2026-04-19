import { lazy, Suspense } from "react";
import { Link } from "react-router";

const Remote = lazy(
  // @ts-ignore
  async () => import("mf_admin/admin-app"),
);

export function Welcome() {
  return (
    <>
      <Suspense fallback="loading...">
        <Remote />
      </Suspense>
      <Link to="analytics">Load Analytics module</Link>
    </>
  );
}
