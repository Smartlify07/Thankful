import { Variants } from 'motion/react';
import * as motion from 'motion/react-client';
import { forwardRef } from 'react';
import { Link } from 'react-router';

const MobileNavbar = forwardRef<HTMLDivElement, { isOpen: boolean }>(
  function Component(props: { isOpen: boolean }, ref) {
    const { isOpen } = props;

    const containerVariant: Variants = {
      visible: {
        height: '290px',
        top: '0px',
        transition: {
          staggerChildren: 0.1,
          type: 'spring',
          bounce: 0,
          duration: 0.7,
          delayChildren: 0.1,
          when: 'beforeChildren',
        },
      },
      hidden: { height: '0px', top: '-1000px' },
    };
    const itemVariant: Variants = {
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      hidden: { opacity: 0, x: -100 },
    };
    return (
      <motion.div
        ref={ref}
        animate={isOpen ? 'visible' : 'hidden'}
        initial={false}
        variants={containerVariant}
        className={`w-full flex flex-col z-10 nothing py-5 px-5 text-2xl absolute font-medium bg-white rounded-b-lg shadow-md   text-outer-space backdrop:blur-xl md:hidden`}
      >
        {['About', 'Features', 'Contact'].map((text, index) => (
          <motion.span
            key={index}
            className={`py-2 px-0 rounded-lg ${index === 0 ? 'mt-20' : ''}`}
            variants={itemVariant}
          >
            <Link className="py-2 px-2" to={`#${text.toLowerCase()}`}>
              {text}
            </Link>
          </motion.span>
        ))}
      </motion.div>
    );
  }
);

export default MobileNavbar;
