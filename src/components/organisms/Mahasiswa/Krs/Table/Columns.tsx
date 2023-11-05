import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { EnrolledCourse } from '@/types/Courses';

export const columns: ColumnDef<EnrolledCourse>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'code',
    header: 'Kode',
    cell: ({ row }) => <div className='capitalize'>{row.getValue('code')}</div>,
  },
  {
    accessorKey: 'name',
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
];
