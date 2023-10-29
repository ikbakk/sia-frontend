import CourseTableRow from '@/components/molecules/Mahasiswa/Dashboard/CourseTableRow';
import { Card, CardHeader } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { courseTableRows } from '@/lib/constants';

type ActiveCoursesProps = {};

const ActiveCourses = ({}: ActiveCoursesProps) => {
  return (
    <Card>
      <CardHeader>
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
            {courseTableRows.map((item) => {
              return (
                <CourseTableRow
                  key={item.id}
                  code={item.code}
                  name={item.name}
                  semester={item.semester}
                  sifat={item.sifat}
                  sks={item.sks}
                  status={item.status}
                />
              );
            })}
          </TableBody>
        </Table>
      </CardHeader>
    </Card>
  );
};

export default ActiveCourses;
