import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ChangeEvent } from 'react';
// import styles from './search-field.module.scss';

/* eslint-disable-next-line */
export interface SearchFieldProps {
  placeholder?: string;
  width?: number;
  onChange?: (value: string) => void;
}

export function SearchField({
  width,
  placeholder,
  onChange,
}: SearchFieldProps) {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div
      className={`search-field relative flex items-stretch w-full bg-white rounded-lg`}
      style={{ width: `${width}px` }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
      </div>
      <input
        type="search"
        name="search"
        id="search"
        className="block w-full rounded-lg py-2.5 pl-10 text-gray-900 outline-none border"
        placeholder={placeholder ?? 'Search data sources'}
        onChange={handleSearchChange}
      />
    </div>
  );
}
