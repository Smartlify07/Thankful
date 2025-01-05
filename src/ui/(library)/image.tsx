import { useImagesProvider } from '@/context/ImagesProvider';
import { useState } from 'react';

const Image = ({ url }: { url: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { selectImage } = useImagesProvider();

  const handleSelectImage = () => {
    selectImage(url);
  };

  const handleError = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-32 h-32">
      <img
        src={url}
        alt="Loaded content"
        className={`rounded-sm col-span-1 h-full object-cover cursor-pointer transition-all ${
          isLoading ? 'blur-md bg-neutral-500' : 'blur-none'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        onClick={handleSelectImage}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-100 rounded-sm animate-pulse"></div>
      )}
    </div>
  );
};

export default Image;
