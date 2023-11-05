import ProfileForm from '@/components/organisms/Mahasiswa/Profile/Form';

type ProfilePageProps = {};

const ProfilePage = ({}: ProfilePageProps) => {
  return (
    <div className='p-4'>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
