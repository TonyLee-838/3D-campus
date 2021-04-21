import React, { ReactNode, Children, Suspense } from "react";

interface SuspenseWrapperProps {
  children: ReactNode;
}

const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => {
  return (
    <>
      {Children.map(children, (child, i) => (
        <Suspense fallback={null} key={`suspense-${i}`}>
          {child}
        </Suspense>
      ))}
    </>
  );
};

export default SuspenseWrapper;
