import NewKrs from '@/components/organisms/Mahasiswa/Krs/NewKrs';
import PrevKrs from '@/components/organisms/Mahasiswa/Krs/PrevKrs';

import { getItems } from '@/lib/queryFn/getItems';
import { cookiesCheck, extractStudentID } from '@/lib/tokenHelper';
import { EnrolledCourse } from '@/types/Courses';
import { Krs, KrsDetailed } from '@/types/Krs';
import { SuccessResponse } from '@/types/SuccessResponse';

type KrsPageProps = {};
type KrsDetailedRes = SuccessResponse<KrsDetailed>;
type KrsRes = SuccessResponse<Krs[]>;
type CourseRes = SuccessResponse<EnrolledCourse[]>;

const KrsPage = async ({}: KrsPageProps) => {
  const token = cookiesCheck();
  const studentID = extractStudentID(token);
  const courseRoute = 'courses';
  const { data: courses } = await getItems<CourseRes>(courseRoute);
  const { data: krsCount } = await getItems<KrsRes>(`krs/${studentID}`);
  const { data: krs } = await getItems<KrsDetailedRes>(`krs/${studentID}/1`);

  return (
    <div className='flex flex-col gap-8 p-4'>
      <h2 className='scroll-m-20 border-b pb-8 text-3xl font-semibold tracking-tight first:mt-0'>
        KRS ({studentID})
      </h2>
      <NewKrs courses={courses.data} />
      <PrevKrs
        token={token}
        krsCount={krsCount.data}
        initialData={krs.data}
        studentID={studentID!}
      />
    </div>
  );
};

export default KrsPage;
