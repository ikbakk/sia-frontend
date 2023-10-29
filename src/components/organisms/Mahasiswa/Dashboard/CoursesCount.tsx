import { courseCounts } from '@/lib/constants';
import CoursesCountCard from '@/components/molecules/Mahasiswa/Dashboard/CountCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type CoursesCountProps = {};

const CoursesCount = ({}: CoursesCountProps) => {
  return (
    <Card>
      <CardHeader>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
          Mata kuliah Anda
        </h3>
      </CardHeader>
      <CardContent className='grid grid-cols-3 gap-4'>
        {courseCounts.map((item) => {
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
