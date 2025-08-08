import React from "react";

// interface Props {
//   params: { id: number };
// }

// const UserDetailPage = ({ params: { id } }: Props) => {
//   return <div>UserDetailPage {id}</div>;
// };

// export default UserDetailPage;

const UserDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
