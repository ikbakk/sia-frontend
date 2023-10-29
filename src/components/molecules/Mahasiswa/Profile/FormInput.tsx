'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type FormInputProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  disabled?: boolean;
};

const FormInput = ({
  label,
  placeholder,
  value,
  id,
  disabled = false,
  ...props
}: FormInputProps) => {
  return (
    <div {...props}>
      <Label className='capitalize' htmlFor={id}>
        {label}
      </Label>
      <Input
        disabled={disabled}
        id={id}
        type='text'
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
