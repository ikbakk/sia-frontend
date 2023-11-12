'use client';

import { Card, CardHeader } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DataTableDemo } from './Table/Tables';

import { onYear } from '@/lib/onYearCheck';
import { useContext } from 'react';
import { KrsContext } from '@/contexts/KrsContext';

const NewKrs = () => {
  const { courses, token, studentID } = useContext(KrsContext);
  const year = onYear();
  const filteredCourse = courses.data.filter((c) => c.onYear === year);
  return (
    <Card>
      <CardHeader>
        <Accordion type='single' collapsible>
          <AccordionItem className='border-none outline-none' value='item-1'>
            <AccordionTrigger>
              <h2 className='scroll-m-20 text-2xl font-semibold capitalize tracking-tight first:mt-0'>
                Ajukan Krs ( {year.toLocaleLowerCase()} )
              </h2>
            </AccordionTrigger>
            <AccordionContent>
              <DataTableDemo
                data={filteredCourse}
                onYear={year}
                studentID={studentID}
                token={token}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardHeader>
    </Card>
  );
};

export default NewKrs;
