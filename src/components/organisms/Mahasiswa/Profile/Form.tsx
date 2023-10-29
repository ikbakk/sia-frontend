import FormInput from '@/components/molecules/Mahasiswa/Profile/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { profileItems } from '@/lib/constants';

type ProfileFormProps = {};

const ProfileForm = ({}: ProfileFormProps) => {
  return (
    <Card>
      <CardHeader>
        <h3>Edit Profile</h3>
      </CardHeader>
      <CardContent>
        <div className='flex w-full gap-4'>
          <FormInput
            className='w-full'
            id='firstName'
            label='First Name'
            placeholder='First Name'
            value='Muhammad Iqbal'
            disabled={true}
          />
          <FormInput
            className='w-full'
            id='firstName'
            label='Last Name'
            placeholder='Last Name'
            value='Firdaus'
            disabled={true}
          />
        </div>
        {profileItems.map((item) => {
          return (
            <FormInput
              className='w-full'
              id={item.id}
              label={item.label}
              placeholder={item.placeholder}
              value={item.value}
              disabled={item.disabled}
            />
          );
        })}
      </CardContent>
      <CardFooter>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileForm;
