import { loadRemote } from "@module-federation/enhanced/runtime";
import { lazy, Suspense } from "react";

export default function AnalyticsWrapper() {
  const MyButton = lazy(() =>
    loadRemote("analytics").then(({ MyButton }) => {
      return {
        default: MyButton,
      };
    }),
  );

  return (
    <>
      <div>Analytics Wrapper</div>
      <Suspense fallback="Loading Analytics...">
        <MyButton />
      </Suspense>
    </>
  );
}
