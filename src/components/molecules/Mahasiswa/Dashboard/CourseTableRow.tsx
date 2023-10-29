import { TableCell, TableRow } from '@/components/ui/table';

type CourseTableRowProps = {
  code: string;
  name: string;
  sks: number;
  semester: number;
  sifat: string;
  status: string;
};

const CourseTableRow = ({
  code,
  name,
  semester,
  sifat,
  sks,
  status,
}: CourseTableRowProps) => {
  return (
    <TableRow className='capitalize'>
      <TableCell className='font-medium'>{code}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{sks}</TableCell>
      <TableCell>{semester}</TableCell>
      <TableCell>{sifat}</TableCell>
      <TableCell className='text-right'>{status}</TableCell>
    </TableRow>
  );
};

export default CourseTableRow;
