import { ReactNode } from 'react';
import './section-component.scss';

/* eslint-disable-next-line */
export interface SectionComponentProps {
  sectionName?: string;
  children: ReactNode;
  showBorder?: true;
  showTopBorder?: true;
  darkTopBorder?: true;
  rightActions?: ReactNode[];
  leftActions?: ReactNode[];
}

export function SectionComponent({
  sectionName,
  rightActions,
  leftActions,
  children,
  showBorder,
  showTopBorder,
  darkTopBorder,
}: SectionComponentProps) {
  return (
    <div
      className={`section-container ${showBorder && 'show-border'}  ${
        showTopBorder && 'show-top-border'
      }
    ${darkTopBorder && 'dark-top-border'}`}
    >
      {(sectionName || leftActions || rightActions) && (
        <div className="top">
          <div className="left">
            {sectionName && <h2>{sectionName}</h2>}
            <div className="actions">
              {leftActions?.map((action, index) => (
                <div key={index}>{action}</div>
              ))}
            </div>
          </div>
          <div className="actions">
            {rightActions?.map((action, index) => (
              <div key={index}>{action}</div>
            ))}
          </div>
        </div>
      )}
      <div className="sub">{children}</div>
    </div>
  );
}
