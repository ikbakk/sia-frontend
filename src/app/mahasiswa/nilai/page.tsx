import { GradeTable } from '@/components/organisms/Mahasiswa/Nilai/Table/Table';
import { getItems } from '@/lib/queryFn';
import { cookiesCheck, extractStudentID } from '@/lib/tokenHelper';
import { StudentGrade } from '@/types/Grades';
import { SuccessResponse } from '@/types/SuccessResponse';

type StudentGrades = SuccessResponse<StudentGrade[]>;

const NilaiPage = async () => {
  const token = cookiesCheck();
  const studentID = extractStudentID(token);

  const grades: StudentGrades = await getItems(
    `students/${studentID}/grades`,
  ).then((res) => res.json());
  return (
    <div className='p-4'>
      <GradeTable data={grades.data} />
    </div>
  );
};

export default NilaiPage;
