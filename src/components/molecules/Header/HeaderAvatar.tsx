'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

type AvatarProps = {
  fallbackLabel: string;
};

const HeaderAvatar = ({ fallbackLabel }: AvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src='https://i.pravatar.cc/300' />
      <AvatarFallback>{fallbackLabel}</AvatarFallback>
    </Avatar>
  );
};

export default HeaderAvatar;
