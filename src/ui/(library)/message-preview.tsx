import { useImagesProvider } from '@/context/ImagesProvider';
import { getRandomColor } from '@/utils/getRandomColor';
import { lightenColor } from '@/utils/lightenColor';
import { motion } from 'motion/react';
import { forwardRef } from 'react';

type MessagePreviewProps = {
  title: string;
  content: string;
};
const MessagePreview = forwardRef<HTMLDivElement, MessagePreviewProps>(
  function MessagePreview({ title, content }, ref) {
    const color = getRandomColor();
    const lighterVersion = lightenColor(color, 60);
    const { selectedImage } = useImagesProvider();

    return (
      <motion.div
        ref={ref}
        exit={{ opacity: 0 }}
        style={{
          backgroundColor: !selectedImage ? lighterVersion : '',
          backgroundImage: selectedImage ? `url("${selectedImage}")` : '',
          backgroundSize: selectedImage ? 'cover' : '',
        }}
        id="preview"
        className="flex min-h-[700px] h-[700px] border flex-col relative items-start px-6 py-20 gap-12 rounded-lg text-outer-space w-full self-center"
      >
        <h1
          className={`text-lg  sm:text-xl md:text-4xl leading-[1.2] text-center self-center font-medium tracking-tighter  italic font-inter`}
        >
          {title}
        </h1>
        <p className={`text-lg font-inter xl:text-xl`}>{content}</p>
      </motion.div>
    );
  }
);

export default MessagePreview;
