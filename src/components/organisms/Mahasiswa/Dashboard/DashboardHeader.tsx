import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import dateNow from '@/lib/dateNow';
import { Student } from '@/types/Students';

type DashboardHeaderProps = Partial<Student> & {};

const DashboardHeader = ({
  firstName,
  lastName,
  studentID,
  faculty,
  major,
}: DashboardHeaderProps) => {
  const now = dateNow();

  return (
    <Card className='flex justify-between bg-primary/80 dark:bg-primary/60'>
      <div>
        <CardHeader>
          <CardDescription className='text-accent-foreground'>
            Selamat datang!
          </CardDescription>
          <CardTitle className='capitalize'>{`${firstName} ${lastName}`}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className='text-accent-foreground'>
            IPK Semester ini: 4.00
          </CardDescription>
          <CardDescription className='text-accent-foreground'>
            IPK : 4.00
          </CardDescription>
        </CardContent>
      </div>
      <div className='flex flex-col items-end justify-between text-right'>
        <CardHeader>
          <CardDescription className='text-accent-foreground'>
            {now}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle className='capitalize'>Fakultas {faculty}</CardTitle>
          <CardDescription className='capitalize text-accent-foreground'>
            Jurusan {major}
          </CardDescription>
          <CardDescription className='text-accent-foreground'>
            {studentID}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};

export default DashboardHeader;
