import './pill.scss';

/* eslint-disable-next-line */
export interface PillProps {
  text: string;
  type?: 'default' | 'primary' | 'blue' | 'red' | 'brown' | 'oxblood';
  fontSize?: number;
  borderRadius?: number;
}

export function Pill({ text, type, fontSize, borderRadius }: PillProps) {
  return (
    <div className={`app-pill ${type}`} style={{ fontSize, borderRadius }}>
      <p>{text}</p>
    </div>
  );
}
