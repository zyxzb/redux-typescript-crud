interface IProps {
  title: string;
  children: JSX.Element;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: IProps) => {
  return (
    <div className='fixed z-10 inset-0 bg-black/50 backdrop-blur-sm grid place-items-center'>
      <div className='bg-white p-5 md:p-10 w-2/3 md:w-1/2'>
        <div className='flex justify-between items-center mb-5'>
          <h2 className='font-bold text-2xl'>{title}</h2>
          <button
            className='text-gray-500 text-4xl hover:text-black'
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
