import FormInput from '@/components/molecules/Mahasiswa/Profile/FormInput';
import ProfileForm from '@/components/organisms/Mahasiswa/Profile/Form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { profileItems } from '@/lib/constants';

type ProfilePageProps = {};

const ProfilePage = ({}: ProfilePageProps) => {
  return (
    <div className='p-4'>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
