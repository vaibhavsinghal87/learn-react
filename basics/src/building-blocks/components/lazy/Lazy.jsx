import { lazy, Suspense, useState } from "react";

const LazyComp = lazy(() => import("./LazyComponent.jsx"));

export default function Lazy() {
  const [showLazyComponent, setShowLazyComponent] = useState(false);
  return (
    <>
      <h1>React Lazy API</h1>
      <button onClick={() => setShowLazyComponent(true)}>
        Show Lazy Component
      </button>
      {showLazyComponent && (
        <Suspense fallback={null}>
          <LazyComp />
        </Suspense>
      )}
    </>
  );
}
