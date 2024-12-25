import { CSSProperties, ReactNode } from 'react';
import * as motion from 'motion/react-client';
import { MotionProps } from 'motion/react';

interface ButtonProps extends MotionProps {
  text: string;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  children,
  style,
  ...motionProps
}: ButtonProps) => {
  const handleClick = () => {
    onClick!();
  };
  return (
    <motion.button
      style={style}
      className={`p-4 ${motionProps.className}`}
      onClick={handleClick}
      {...motionProps}
    >
      {text} {children}
    </motion.button>
  );
};

export default Button;
