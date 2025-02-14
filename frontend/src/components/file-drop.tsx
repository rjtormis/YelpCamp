import { useCallback, Dispatch, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";

interface FileDropProps {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;
}

export default function FileDrop({ images, setImages }: FileDropProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newImages = [...images, ...acceptedFiles].slice(0, 5); // Limit to 5 images
      setImages(newImages);
    },
    [images]
  );

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    maxFiles: 5,
    disabled: images.length === 5, // Disable dropzone when 5 images are uploaded
  });

  return (
    <div className="space-y-4">
      {/* Show Dropzone ONLY if images < 5 */}
      {images.length < 5 && (
        <div {...getRootProps()} className="border p-6 rounded-xl text-center hover:cursor-pointer">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-gray-500">Drop the images here...</p>
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="my-2 text-gray-600" size={24} />
              <p className="text-gray-500">Drag & drop up to 5 images, or click to select</p>
            </div>
          )}
        </div>
      )}

      {/* Show message when 5 images are uploaded */}
      {images.length > 0 && images.length < 5 && (
        <p className="text-gray-500 text-sm text-center">{images.length} / 5 images uploaded</p>
      )}

      {/* Image Previews with Remove Button */}
      {images.length > 0 && (
        <div className="grid grid-cols-5 gap-2 mt-2">
          {images.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index + 1}`}
                className="w-20 h-20 object-cover rounded-md"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
