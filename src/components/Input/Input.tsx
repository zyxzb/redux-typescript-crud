import Style from './Input.module.css';

interface InputProps {
  label: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
}

const Input = ({ label, value, type = 'text', onChange }: InputProps) => {
  return (
    <div className={Style.container}>
      <label htmlFor=''>{label}:</label>
      <div className=''>
        <input
          type={type}
          value={value}
          className={Style.input}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
