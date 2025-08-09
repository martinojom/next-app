"use client";
import React from "react";
import { usePathname } from "next/navigation";

const UserNotFoundPage = () => {
  const pathname = usePathname();
  const userId = pathname.split("/")[2];

  console.log("Current Pathname:", pathname);
  console.log("User ID:", userId);
  return <div>User of id {userId} not found</div>;
};

export default UserNotFoundPage;
