type CustomToastProps = {
  message: string;
  type: 'success' | 'error' | 'pending';
};

const CustomToast = ({ message, type }: CustomToastProps) => {
  return (
    <div className="rounded-xl bg-white text-black text-lg text-center">
      <p>{message}</p>
    </div>
  );
};

export default CustomToast;
