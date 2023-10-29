import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type DashboardHeaderProps = {};

const DashboardHeader = ({}: DashboardHeaderProps) => {
  const date = new Date();
  const now = date.toLocaleDateString();
  return (
    <Card className='flex justify-between bg-primary/80 dark:bg-primary/60'>
      <div>
        <CardHeader>
          <CardDescription className='text-accent-foreground'>
            Selamat datang!
          </CardDescription>
          <CardTitle>User</CardTitle>
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
      <div className='flex flex-col items-end text-right'>
        <CardHeader>
          <CardDescription className='text-accent-foreground'>
            {now}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardTitle>Fakultas Teknik</CardTitle>
          <CardDescription className='text-accent-foreground'>
            Jurusan Teknik Elektro
          </CardDescription>
          <CardDescription className='text-accent-foreground'>
            F1B017066
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};

export default DashboardHeader;
