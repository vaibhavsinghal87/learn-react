import { lazy, Suspense } from "react";

const Remote = lazy(
  // @ts-ignore
  async () => import("remote/remote-app"),
);

export function Welcome() {
  return (
    <>
      <Suspense fallback="loading...">
        <Remote />
      </Suspense>
    </>
  );
}
