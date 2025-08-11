"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

interface cloudinaryResult {
  public_id: string;
  thumbnail_url: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="wallpaper" />
      )}
      <CldUploadWidget
        uploadPreset="om4673mo"
        options={{
          sources: ["local", "unsplash"],
          multiple: false,
          maxFiles: 5,
        }}
        onSuccess={(result) => {
          // { public_id, secure_url, etc }

          if (result.event !== "success") return;

          const info = result.info as cloudinaryResult;

          setPublicId(info?.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
