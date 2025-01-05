import { fetchImages } from '@/services/image-service.service';
import { Image } from '@/types/types';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type ImagesContextType = {
  selectImage: (url: string) => void;
  selectedImage: string | null;
  images: Image[];
};
export const ImagesContext = createContext<ImagesContextType | null>(null);

const ImagesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const selectImage = (url: string) => {
    setSelectedImage(url);
  };

  useEffect(() => {
    (async () => {
      const images = await fetchImages();
      setImages(images);
    })();
  }, []);
  return (
    <ImagesContext.Provider value={{ selectImage, selectedImage, images }}>
      {children}
    </ImagesContext.Provider>
  );
};

export const useImagesProvider = () => {
  const values = useContext(ImagesContext) as ImagesContextType;
  return values;
};

export default ImagesProvider;
