import React from "react";

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
