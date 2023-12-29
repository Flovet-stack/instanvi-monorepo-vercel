'use client';

import React from 'react';
import './people-sidebar.scss';
import { Segments, Tags } from './components';

export const PeopleSidebar = () => {
  return (
    <div className="people-sidebar">
      <div className="sub">
        <Segments />
      </div>
      <div className="sub">
        <Tags />
      </div>
    </div>
  );
};
