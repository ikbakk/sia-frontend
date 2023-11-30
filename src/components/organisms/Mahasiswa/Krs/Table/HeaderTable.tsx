import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type HeaderTableProps = {
  inputValue: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setNewSemester: React.Dispatch<React.SetStateAction<number>>;
};

const HeaderTable = ({
  inputValue,
  inputOnChange,
  setNewSemester,
}: HeaderTableProps) => {
  const handleChange = (value: number) => {
    setNewSemester(value);
  };
  return (
    <div className='flex items-center justify-between px-1 py-4'>
      <Input
        placeholder='Cari mata kuliah'
        value={inputValue}
        onChange={(event) => inputOnChange(event)}
        className='max-w-sm'
      />
      <div className='w-fit'>
        <Select onValueChange={(v) => handleChange(parseInt(v))}>
          <SelectTrigger>
            <SelectValue placeholder='Piilh semester' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Semester 1</SelectItem>
            <SelectItem value='2'>Semester 2</SelectItem>
            <SelectItem value='3'>Semester 3</SelectItem>
            <SelectItem value='4'>Semester 4</SelectItem>
            <SelectItem value='5'>Semester 5</SelectItem>
            <SelectItem value='6'>Semester 6</SelectItem>
            <SelectItem value='7'>Semester 7</SelectItem>
            <SelectItem value='8'>Semester 8</SelectItem>
            <SelectItem value='9'>Semester 9</SelectItem>
            <SelectItem value='10'>Semester 10</SelectItem>
            <SelectItem value='11'>Semester 11</SelectItem>
            <SelectItem value='12'>Semester 12</SelectItem>
            <SelectItem value='13'>Semester 13</SelectItem>
            <SelectItem value='14'>Semester 14</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HeaderTable;
