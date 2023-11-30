import NewKrs from '@/components/organisms/Mahasiswa/Krs/NewKrs';
import PrevKrs from '@/components/organisms/Mahasiswa/Krs/PrevKrs';
import { KrsProvider } from '@/contexts/KrsContext';

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

  const courses: CourseRes = await getItems('courses').then((res) =>
    res.json(),
  );
  const krsList: KrsRes = await getItems(`krs/${studentID}`).then((res) =>
    res.json(),
  );
  const krsDetails: KrsDetailedRes = await getItems(`krs/${studentID}/1`).then(
    (res) => res.json(),
  );

  return (
    <KrsProvider
      token={token}
      studentID={studentID!}
      initialKrsList={krsList.data}
      initialKrsDetails={krsDetails.data}
      initialCourses={courses.data}
    >
      <div className='flex flex-col gap-8 p-4'>
        <h2 className='scroll-m-20 border-b pb-8 text-3xl font-semibold tracking-tight first:mt-0'>
          KRS ( {studentID} )
        </h2>
        <NewKrs />
        <PrevKrs />
      </div>
    </KrsProvider>
  );
};

export default KrsPage;
