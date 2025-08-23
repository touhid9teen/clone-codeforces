import React from "react";

export default function SinglePageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* min-h-[calc(100vh-8rem-6rem-10px)]  */}
      {children}
    </div>
  );
}
