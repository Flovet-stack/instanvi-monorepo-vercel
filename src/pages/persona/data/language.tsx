import React, { useState, useContext } from "react";
import Multiselect from "multiselect-react-dropdown";
import AuthContext from "@/Components/context";
import Countries from "../../../../../countries.json";

interface LanguageProps {
  name: string;
}

const Language: FC<LanguageProps> = () => {
  const data = useContext(AuthContext);
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
              onSelect={(selected: string[], item: any) => {
                setSelectedOption(selected);
                data.setLanguage([...data.language, item.name]);
              }}
              onRemove={(selected: string[], item: any) => {
                let dataLanguage = data.language.filter(
                  (items: string) => items !== item.name
                );
                data.setLanguage([...dataLanguage]);
                setSelectedOption(selected);
              }}
              // onSelect={handleTypeSelect}
              // onRemove={handleTypeRemove}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Language;