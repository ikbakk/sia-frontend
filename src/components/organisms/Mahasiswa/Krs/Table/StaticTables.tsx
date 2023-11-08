import CourseTableRow from '@/components/molecules/Mahasiswa/Dashboard/CourseTableRow';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { EnrolledCourse } from '@/types/Courses';

type StaticTablesProps = {
  courseDetail: EnrolledCourse[];
  sksTotal: number;
};

const StaticTables = ({ courseDetail, sksTotal }: StaticTablesProps) => {
  return (
    <Table>
      <TableCaption>Daftar mata kuliah aktif anda.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Kode</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>SKS</TableHead>
          <TableHead>Semester</TableHead>
          <TableHead>Sifat</TableHead>
          <TableHead className='text-right'>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courseDetail.map((item) => {
          return (
            <CourseTableRow
              key={item.id}
              code={item.code}
              name={item.name}
              semester={item.semester}
              sifat={item.type ? 'Wajib' : 'Pilihan'}
              sks={item.credit}
              status={item.available ? 'aktif' : 'tidak aktif'}
            />
          );
        })}
        <TableRow>
          <TableCell>Total SKS</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell className='text-right'>{sksTotal}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default StaticTables;
