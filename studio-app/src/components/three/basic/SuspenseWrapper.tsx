import React, { ReactNode, Children, Suspense } from "react";

interface SuspenseWrapperProps {
  children: ReactNode;
}

const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => {
  return (
    <>
      {Children.map(children, (child, i) => (
        <Suspense fallback={null} key={child.id}>
          {child}
        </Suspense>
      ))}
    </>
  );
};

export default SuspenseWrapper;
