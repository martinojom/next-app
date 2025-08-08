// app/users/page.tsx

export const dynamic = "force-dynamic"; // ✅ Required for dynamic query param access

import React from "react";
import UserTable from "./UserTable";
// import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

// interface Props {
//   searchParams?: {
//     sortOrder?: string;
//   };
// }

// const UsersPage = async ({ searchParams }: Props) => {
//   const sortOrder = searchParams?.sortOrder ?? "name";

//   return (
//     <>
//       <h1>Users</h1>
//       <UserTable sortOrder={sortOrder} />
//     </>
//   );
// };

// export default UsersPage;

const UsersPage = async ({
  params,
}: {
  params: Promise<{ searchParams: string }>;
}) => {
  const sortOrder = (await params).searchParams;

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
