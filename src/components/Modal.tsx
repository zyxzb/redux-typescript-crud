interface IProps {
  title: string;
  children: JSX.Element;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: IProps) => {
  return (
    <div className='fixed inset-0 z-10 grid place-items-center bg-black/50 backdrop-blur-sm'>
      <div className='relative w-2/3 bg-white p-5 md:w-1/2 md:p-10'>
        <div className='mb-5 flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <button
            className='absolute -right-[20px] -top-[20px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black text-center text-xl text-white hover:text-gray-500'
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
