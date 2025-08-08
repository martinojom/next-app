import { Suspense } from "react";
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
      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
