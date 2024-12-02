import { useEffect, useState } from "react";


interface debounce {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
  className?: string;
  placeholder?: string;
}

const DebouncedInput = ({
  value: initValue,
  onChange,
  debounce = 500,
  ...props
}: debounce) => {
  const [value, setValue] = useState(initValue);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  // *  0.5s after set value in state
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value, onChange, debounce]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      
    />
  );
};

export default DebouncedInput;
