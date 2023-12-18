import React, { useState, useContext, FC } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { AuthContext } from '@/components/context/context';
import { CurrentUserContext } from '@/pages/_app';
import Countries from '../../../../../countries.json';

interface LanguageProps {
  name: string;
}

const Language: FC<LanguageProps> = () => {
  const data = useContext(CurrentUserContext as any) as any;
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  return (
    <>
      <div className="mx-14">
        <h6 className="font-semibold text-xl mt-16">Languages</h6>
      </div>
      <div>
        <div className="relative mt-2 mx-10 rounded-md shadow-sm">
          <div className="px-4 my-10">
            <Multiselect
              className="w-full py-2.5 rounded bg-transparent"
              options={Countries}
              displayValue="name"
              selectedValues={data?.language?.map((lang: any) =>
                Countries.find((country: any) => country?.name === lang)
              )}
              onSelect={(selected: string[], item: any) => {
                setSelectedOption(selected);
                data?.setLanguage([...data?.language, item.name]);
              }}
              onRemove={(_selected: string[], item: any) => {
                let dataLanguage = data?.language.filter(
                  (items: string) => items !== item.name
                );
                data?.setLanguage([...dataLanguage]);
                // setSelectedOption(selected);
              }}
              // onSelect={handleTypeSelect}
              // onRemove={handleTypeRemove}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
