import React from "react";

export const PageLoader: React.FC = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="h-2o w-20 m-auto animate-spin">
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};