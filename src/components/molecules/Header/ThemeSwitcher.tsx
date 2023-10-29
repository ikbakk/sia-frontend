'use client';

import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { MdOutlineDarkMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const handleSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='flex items-center gap-2'>
      <MdOutlineDarkMode size={32} />
      <Switch value={theme} onClick={handleSwitch} />
    </div>
  );
};

export default ThemeSwitcher;
