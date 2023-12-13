import React from 'react';
import { General } from './general';
import Media from './media';
import { Scheduling } from './sheduling';
import { Pricing } from './pricing';

export default function FormList({ heights }: { heights: number | undefined }) {
  const forms = [<General />, <Media />, <Scheduling />, <Pricing />];

  return (
    <div className="w-full scroll-persona h-auto">
      {forms?.map((form, key) => (
        <div key={key}>
          <div
            className="w-full scrolls bg-white overflow-y-auto"
            style={{ height: heights }}
          >
            {form}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
