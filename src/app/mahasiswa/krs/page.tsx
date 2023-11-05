import { DataTableDemo } from '@/components/organisms/Mahasiswa/Krs/Table/Tables';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getItems } from '@/lib/queryFn/getItems';
import { cookiesCheck, extractStudentID } from '@/lib/tokenHelper';
import { EnrolledCourse } from '@/types/Courses';
import { Krs } from '@/types/Krs';
import { SuccessResponse } from '@/types/SuccessResponse';

type KrsPageProps = {};
type KrsRes = SuccessResponse<Krs>;
type CourseRes = SuccessResponse<EnrolledCourse[]>;

const KrsPage = async ({}: KrsPageProps) => {
  const token = cookiesCheck();
  const studentID = extractStudentID(token);
  const courseRoute = 'courses';

  const { data: courses } = await getItems<CourseRes>(courseRoute);

  return (
    <div className='flex flex-col gap-8 p-4'>
      <h2 className='scroll-m-20 border-b pb-8 text-3xl font-semibold tracking-tight first:mt-0'>
        KRS ({studentID})
      </h2>
      <Card>
        <CardContent>
          <DataTableDemo data={courses.data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default KrsPage;
