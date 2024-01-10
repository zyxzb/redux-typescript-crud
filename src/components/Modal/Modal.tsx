import Styles from './ModalStyle.module.css';

interface IProps {
  title: string;
  children: JSX.Element;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: IProps) => {
  return (
    <div
      //  id='myModal'
      className={Styles.modal}
    >
      <div className={Styles['modal-content']}>
        <button className={Styles.close} onClick={onClose}>
          &times;
        </button>
        <h2 className={Styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
