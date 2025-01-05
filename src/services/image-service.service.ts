import { database } from '@/appwrite/appwriteConfig';
import { Image } from '@/types/types';
import { isErrorWithMessage } from '@/utils/isErrorWithMessage';

const DATABASE_ID = import.meta.env.VITE_APP_APPWRITE_DATABASE_ID;
const IMAGES_COLLECTION_ID = import.meta.env
  .VITE_APP_APPWRITE_IMAGES_COLLECTION_ID;
export const fetchImages = async () => {
  try {
    const images = (
      await database.listDocuments(DATABASE_ID, IMAGES_COLLECTION_ID)
    ).documents as Image[];

    console.log(images);
    return images;
  } catch (error) {
    let message;
    if (isErrorWithMessage(error)) {
      message = error.message;
    }
    console.error(error);
    throw new Error(message);
  }
};
