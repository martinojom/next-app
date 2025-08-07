// app/users/page.tsx

export const dynamic = "force-dynamic"; // ✅ Required for dynamic query param access

import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams?: {
    sortOrder?: string;
  };
}

const UsersPage = async ({ searchParams }: Props) => {
  const sortOrder = searchParams?.sortOrder ?? "name";

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
