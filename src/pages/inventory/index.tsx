import React, { useEffect, useState, FC } from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { HeaderLayout } from '@/layouts/header-layout';
import FilterInventory from '@/features/inventory/components/FilterInventory';
import { CalendarItem, CalendarMonth } from '@/features/inventory/types';
import InventoryList from '@/features/inventory/components/InventoryList';

export const Persona: FC = () => {
  const year: number = new Date().getFullYear();
  const [saved, setSave] = useState<CalendarMonth[]>();
  let calendar: CalendarMonth[] = [];
  let dat: CalendarItem[] = [];

  useEffect(() => {
    for (var i = 1; i < 13; i++) {
      calendar.push({
        Month: moment(`${i}`, 'MM').format('MMMM'),
        days: Array(moment(`${year}-${i}`, 'YYYY-MM').daysInMonth())


          .fill(0)
          .map((n, is) => {
            return {
              ...dat,
              id: uuid(),
              name: 'James',
              date: moment(`${is + 1}-${i}-${year}`, 'DD/MM/YYYY').format(
                'Do MMMM YYYY'
              ),
            };
          }),
      });
    }
    setSave(calendar);
  }, []);

  return (
    <HeaderLayout>
      <div className="w-full ">
        <div className="mx-auto max-w-8xl px-6 lg:px-16 mt-36">
          <FilterInventory />

          {saved &&
            saved.map((item, key) => (
              <div key={key}>
                <div className="mt-5 mb-1">
                  <h2 className="text-lg">{item.Month}</h2>
                </div>
                {item.days.map((it) => (
                  <InventoryList it={it} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Persona;
