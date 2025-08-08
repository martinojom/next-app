import React from "react";

// interface Props {
//   params: { slug?: string[] };
//   searchParams: { sortOrder?: string };
// }

const ProductPage = async ({
  params,
}: {
  params: Promise<{
    slug: string[];
    searchParams: { sortOrder: string };
  }>;
}) => {
  const { slug, searchParams } = await params;
  return (
    <div>
      ProductPage {slug} {searchParams?.sortOrder}
    </div>
  );
};

export default ProductPage;
