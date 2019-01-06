import React from "react";

const LoadingPage = () => {
  return (
    <div className="bg-light w-100 loadingPage position-fixed">
      <div className="loading position-relative text-center">
        <span className="span-1" />
        <span className="span-2" />
        <span className="span-3" />
        <span className="span-4" />
        <span className="span-5" />
      </div>
    </div>
  );
};
export default LoadingPage;
