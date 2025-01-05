import { useImagesProvider } from '@/context/ImagesProvider';
import { useState } from 'react';

const Image = ({ url }: { url: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { selectImage } = useImagesProvider();
  const handleSelectImage = () => {
    selectImage(url);
  };
  console.log(isLoading);
  return (
    <img
      style={{
        filter: isLoading ? 'blur(10px)' : 'none',
      }}
      src={url}
      className="rounded-sm cursor-pointer w-32 h-32 object-cover"
      onLoad={() => {
        setIsLoading(false);
      }}
      onClick={handleSelectImage}
    />
  );
};

export default Image;
