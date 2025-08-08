import React from "react";

// interface Props {
//   params: { id: number; photoId: number };
// }

// const PhotoPage = ({ params: { id, photoId } }: Props) => {
//   return (
//     <div>
//       PhotoDetailPage {id} {photoId}
//     </div>
//   );
// };

// export default PhotoPage;

const PhotoPage = async ({
  params,
}: {
  params: Promise<{ id: string; photoId: string }>;
}) => {
  const { id, photoId } = await params;
  return (
    <div>
      PhotoDetailPage {id} {photoId}
    </div>
  );
};

export default PhotoPage;
