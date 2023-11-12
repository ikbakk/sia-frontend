'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { columns } from './Columns';
import HeaderTable from './HeaderTable';
import { Button } from '@/components/ui/button';

import { useContext, useEffect, useState } from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { EnrolledCourse } from '@/types/Courses';
import { KrsContext } from '@/contexts/KrsContext';

type DataTableProps = {
  data: EnrolledCourse[];
  onYear: 'GENAP' | 'GANJIL';
  studentID: string;
  token: string;
};

export type NewKrsType = {
  onYear: 'GENAP' | 'GANJIL';
  semester: number;
  studentID: string;
  courses: string[];
};

export function DataTableDemo({ data, onYear }: DataTableProps) {
  const { addNewKrs } = useContext(KrsContext);
  const [newSemester, setNewSemester] = useState<number>(1);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSubmit = () => {
    addNewKrs.mutate({
      onYear,
      courses: table.getSelectedRowModel().rows.map((row) => row.original.id),
      semester: newSemester,
    });
  };

  return (
    <div className='w-full'>
      <HeaderTable
        inputValue={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
        inputOnChange={(event) =>
          table.getColumn('name')?.setFilterValue(event.target.value)
        }
        setNewSemester={setNewSemester}
      />
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} mata kuliah dipilih
        </div>
        <div>
          <Button
            disabled={addNewKrs.isPending}
            variant='outline'
            onClick={() => handleSubmit()}
          >
            Ajukan
          </Button>
        </div>
      </div>
    </div>
  );
}
