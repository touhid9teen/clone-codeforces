import React from "react";

export default function SinglePageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex items-center justify-center size-full min-h-[calc(100vh-8rem-6rem-10px)] border-2">
      {children}
    </div>
  );
}
