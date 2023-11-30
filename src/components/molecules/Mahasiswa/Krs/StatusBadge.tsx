import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type StatusBadgeProps = {
  status: 'APPROVED' | 'REJECTED' | 'PENDING' | 'COMPLETED';
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusText =
    status === 'APPROVED'
      ? 'Diterima'
      : status === 'PENDING'
      ? 'Menunggu Presetujuan'
      : status === 'COMPLETED'
      ? 'Selesai'
      : 'Ditolak';
  const className =
    status === 'PENDING'
      ? 'bg-orange-500 hover:bg-orange-500 '
      : status === 'APPROVED'
      ? 'bg-green-500'
      : status === 'COMPLETED'
      ? 'bg-cyan-500'
      : 'bg-red-500';
  return <Badge className={cn('pt-1', className)}> {statusText}</Badge>;
};

export default StatusBadge;
