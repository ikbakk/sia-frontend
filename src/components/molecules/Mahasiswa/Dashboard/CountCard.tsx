import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type CoursesCountCardProps = {
  title: string;
  count: number;
};

const CoursesCountCard = ({ count, title }: CoursesCountCardProps) => {
  return (
    <Card className='bg-card outline outline-1 outline-primary'>
      <CardHeader>
        <CardDescription className='font-bold uppercase text-accent-foreground'>
          {title}
        </CardDescription>
        <CardTitle className='text-primary'>{count}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CoursesCountCard;
