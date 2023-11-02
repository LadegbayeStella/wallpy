// Uploadbutton.js
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UploadDropzone } from "../utils/uploadthing";
import Link from "next/link";
import Image from "next/image";

export const Uploadbutton = ({ onImageUpload }) => {
  const [images, setImage] = useState<
    {
      fileUrl: string;
      fileKey: string;
    }[]
  >([]);

  const handleImageUpload = (res) => {
    if (res && res.length > 0) {
      setImage(res);
      onImageUpload(res);
    }
  };

  const imglist = (
    <ul>
      {images.map((imager) => (
        <li key={imager.fileUrl} className="m-2">
          <Link href={imager.fileUrl}>
            <Image src={imager.fileUrl} height={200} width={200} alt="upload" />
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload a cover pics of your project</DialogTitle>
            <DialogDescription>
              <main className="flex  flex-col items-center justify-between p-24">
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={handleImageUpload}
                  onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
                {imglist}
              </main>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Uploadbutton;
