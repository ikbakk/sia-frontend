import ActiveCourses from '@/components/organisms/Mahasiswa/Dashboard/ActiveCourses';
import CoursesCount from '@/components/organisms/Mahasiswa/Dashboard/CoursesCount';
import DashboardHeader from '@/components/organisms/Mahasiswa/Dashboard/DashboardHeader';

type MahasiswaPageProps = {};

const MahasiswaPage = ({}: MahasiswaPageProps) => {
  return (
    <div className='flex h-full flex-col gap-4 p-4'>
      <DashboardHeader />
      <CoursesCount />
      <ActiveCourses />
    </div>
  );
};

export default MahasiswaPage;
