import './sidebar-filter-option.scss';

/* eslint-disable-next-line */
export interface SidebarFilterOptionProps {
  name: string;
  number: number;
}

export function SidebarFilterOption({
  name,
  number,
}: SidebarFilterOptionProps) {
  return (
    <div className={'sidebar-filter-option'}>
      <p className="name">{name}</p>
      <div className="number">{number}</div>
    </div>
  );
}

export default SidebarFilterOption;
