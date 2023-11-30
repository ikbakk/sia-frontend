import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { StudentGrade } from '@/types/Grades';

export const columns: ColumnDef<StudentGrade>[] = [
  {
    accessorKey: 'code',
    accessorFn: ({ courseDetail }) => courseDetail.code,
    header: 'Kode',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('code')}</div>,
  },
  {
    accessorKey: 'name',
    accessorFn: ({ courseDetail }) => courseDetail.name,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama
        </Button>
      );
    },
    cell: ({ row }) => <div className='capitalize'>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'credit',
    accessorFn: ({ courseDetail }) => courseDetail.credit,
    header: () => <div className=''>SKS</div>,
    cell: ({ row }) => {
      return <div className=''>{row.getValue('credit')}</div>;
    },
  },
  {
    accessorKey: 'type',
    header: () => <div>Tipe</div>,
    cell: ({ row }) => {
      return (
        <div>{row.getValue('type') === 'MANDATORY' ? 'Wajib' : 'Pilihan'}</div>
      );
    },
  },
  {
    accessorKey: 'grade',
    header: () => <div>Nilai</div>,
    cell: ({ row }) => {
      return <div>{row.getValue('grade')}</div>;
    },
  },
];
