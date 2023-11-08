import { Badge } from 'lucide-react';

type StatusBadgeProps = {
  status: 'APPROVED' | 'REJECTED' | 'PENDING';
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return <Badge>StatusBadge</Badge>;
};

export default StatusBadge;
