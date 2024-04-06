import React from "react";

const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="container mx-auto py-4 sm:px-4 lg:max-w-screen-md">
      {children}
    </div>
  );
};

export default ContentWrapper;
