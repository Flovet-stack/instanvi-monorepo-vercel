import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { navigationItems } from './data';
import './menu.scss';
import { useRouter } from 'next/navigation';

interface NavigationMenuProps {}

const NavigationMenu: React.FC<NavigationMenuProps> = () => {
  const router = useRouter();
  const [current, setCurrent] = useState<string>('home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <div className="navigation-menu mx-auto max-w-8xl px-4 sm:px-12 lg:px-12">
      <div className="relative">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={navigationItems}
          style={{ justifyContent: 'center' }}
        />
      </div>
    </div>
  );
};

export default NavigationMenu;
