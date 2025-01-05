import { useShareMessageProvider } from '@/context/ShareMessageProvider';
import { selectMessage } from '@/redux/features/messages/messagesSlice';
import { AnimatePresence, motion } from 'motion/react';
import { forwardRef, useCallback, useRef, useState } from 'react';
import { PiX } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import MessagePreview from './message-preview';
import { useImagesProvider } from '@/context/ImagesProvider';
import Image from './image';
import { BiDownload } from 'react-icons/bi';
import { toPng } from 'html-to-image';
const ShareMessage = forwardRef<HTMLDivElement>(function ShareMessage(_, ref) {
  const { isShareMessageOpen, toggleShareMessage } = useShareMessageProvider();
  const message = useSelector(selectMessage);
  const { images } = useImagesProvider();
  const [link] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const handleDownloadImage = useCallback(() => {
    toPng(previewRef.current!, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'message.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error(error);
      });
  }, [previewRef]);

  console.log(link);
  return (
    <AnimatePresence>
      {isShareMessageOpen && (
        <motion.div
          ref={ref}
          initial={{
            backgroundColor: 'rgb(37,37,37,0.5)',
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{ when: 'afterChildren' }}
          className="w-full z-10 absolute top-0 left-0 min-h-screen flex overflow-auto  justify-end"
        >
          <motion.aside
            initial={{
              translateX: '150%',
            }}
            animate={{
              translateX: '0%',
            }}
            exit={{
              translateX: '150%',
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-white relative  py-6 px-6 right-0  min-h-screen  w-full md:w-5/12  flex flex-col gap-10"
          >
            <header className="flex items-center justify-center relative ">
              <h1 className="text-2xl self-center text-center font-medium text-black">
                Share your message
              </h1>
              <button onClick={toggleShareMessage}>
                <PiX size={20} className="absolute top-0 right-4" />
              </button>
            </header>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-center justify-between">
                <h2 className="text-neutral-500 text-sm">Preview</h2>
                <button
                  onClick={handleDownloadImage}
                  id="download"
                  className="border rounded-md cursor-pointer py-2 text-neutral-800 font-bold w-auto px-2"
                >
                  <BiDownload size={20} />
                </button>
              </div>
              <MessagePreview
                ref={previewRef}
                title={message.title!}
                content={message.content!}
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {images.map((image) => (
                <Image key={image.url} url={image.url} />
              ))}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default ShareMessage;
