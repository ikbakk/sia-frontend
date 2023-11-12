import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type StatusBadgeProps = {
  status: 'APPROVED' | 'REJECTED' | 'PENDING';
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusText =
    status === 'APPROVED'
      ? 'Diterima'
      : status === 'PENDING'
      ? 'Menunggu Presetujuan'
      : 'Ditolak';
  const className =
    status === 'PENDING'
      ? 'bg-orange-500 hover:bg-orange-500 '
      : status === 'APPROVED'
      ? 'bg-green-500'
      : 'bg-destructive';
  return <Badge className={cn('pt-1.5', className)}> {statusText}</Badge>;
};

export default StatusBadge;
