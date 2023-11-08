'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DataTableDemo } from './Table/Tables';

import { EnrolledCourse } from '@/types/Courses';

type NewKrsProps = {
  courses: EnrolledCourse[];
};

const NewKrs = ({ courses }: NewKrsProps) => {
  return (
    <Card>
      <CardHeader>
        <Accordion type='single' collapsible>
          <AccordionItem className='border-none outline-none' value='item-1'>
            <AccordionTrigger>
              <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0'>
                Ajukan Krs
              </h2>
            </AccordionTrigger>
            <AccordionContent>
              <DataTableDemo data={courses} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardHeader>
    </Card>
  );
};

export default NewKrs;
