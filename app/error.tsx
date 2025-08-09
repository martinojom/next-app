"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error occurred:", error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button onClick={() => reset()} className="btn btn-warning">
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
