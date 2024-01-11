interface InputProps {
  label: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
}

const Input = ({ label, value, type = 'text', onChange }: InputProps) => {
  return (
    <div className='m-2'>
      <label htmlFor=''>{label}:</label>
      <div className=''>
        <input
          type={type}
          value={value}
          className='border border-1 w-full h-10 p-2 border-black'
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
