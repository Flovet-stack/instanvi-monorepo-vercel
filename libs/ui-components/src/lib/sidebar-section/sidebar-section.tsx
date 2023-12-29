'use client';

import { ReactNode } from 'react';
import './sidebar-section.scss';

/* eslint-disable-next-line */
export interface SidebarSectionProps {
  sectionName?: string;
  children: ReactNode;
  showBorder?: true;
  showTopBorder?: true;
  darkTopBorder?: true;
  actions?: ReactNode[];
}

export function SidebarSection({
  sectionName,
  actions,
  children,
  showBorder,
  showTopBorder,
  darkTopBorder,
}: SidebarSectionProps) {
  return (
    <div
      className={`sidebar-section ${showBorder && 'show-border'}  ${
        showTopBorder && 'show-top-border'
      }
      ${darkTopBorder && 'dark-top-border'}`}
    >
      {(sectionName || actions) && (
        <div className="top">
          <h2>{sectionName ?? sectionName}</h2>
          <div className="actions">
            {actions?.map((action, index) => (
              <div key={index}>{action}</div>
            ))}
          </div>
        </div>
      )}
      <div className="sub">{children}</div>
    </div>
  );
}
