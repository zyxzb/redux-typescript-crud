interface InputProps {
  label: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
}

const Input = ({ label, value, type = 'text', onChange }: InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={label} className='font-semibold'>
        {label}:
      </label>
      <div>
        <input
          type={type}
          value={value}
          id={label}
          className='border-1 h-10 w-full rounded border border-violet-500 p-2 outline-none focus:border-[2px] focus:border-violet-600'
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
