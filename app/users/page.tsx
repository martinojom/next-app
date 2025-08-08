import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

const UsersPage = async ({
  params,
}: {
  params: Promise<{ searchParams: { sortOrder: string } }>;
}) => {
  const { searchParams } = await params;
  const sortOrder = searchParams?.sortOrder;

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn ">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
