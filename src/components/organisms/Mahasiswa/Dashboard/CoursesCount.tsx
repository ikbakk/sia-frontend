import CoursesCountCard from '@/components/molecules/Mahasiswa/Dashboard/CountCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { EnrolledCourse } from '@/types/Courses';

type CoursesCountProps = {
  enrolledCourse: EnrolledCourse[];
  completedCourse: EnrolledCourse[];
};

const CoursesCount = async ({
  completedCourse,
  enrolledCourse,
}: CoursesCountProps) => {
  const coursesInfo = [
    {
      id: 1,
      title: 'Diambil',
      count: enrolledCourse.length,
    },
    {
      id: 2,
      title: 'Sks Diambil',
      count: enrolledCourse.map((c) => c.credit).reduce((a, b) => a + b, 0),
    },
    {
      id: 3,
      title: 'Selesai',
      count: completedCourse.length,
    },
    {
      id: 4,
      title: 'SKS Selesai',
      count: completedCourse.map((c) => c.credit).reduce((a, b) => a + b, 0),
    },
  ];
  return (
    <Card>
      <CardHeader>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Mata kuliah Anda
        </h3>
      </CardHeader>
      <CardContent className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        {coursesInfo.map((item) => {
          return (
            <CoursesCountCard
              key={item.id}
              title={item.title}
              count={item.count}
            />
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CoursesCount;
