"use client";
import React from "react";
import { usePathname } from "next/navigation";

const UserNotFoundPage = () => {
  const pathname = usePathname();
  const userId = pathname.split("/")[2];

  console.log("Current Pathname:", pathname);
  console.log("User ID:", userId);
  return <div>This user of id {userId} doesn&apos;t exist</div>;
};

export default UserNotFoundPage;
