import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React, { FC } from 'react';

import { usePersonas } from '@/api/persona/usePersonas';
import PersonaList from '@/features/persona/components/PersonaList';
import SkeletonPersona from '@/features/persona/components/SkeletonPersona';
import { HeaderLayout } from '@/layouts/header-layout';

const Persona: FC = () => {
  // const [mut, setPersonas] = useState<any>([])
  const { data, isLoading, refetch } = usePersonas(
    '6c28de38-4ac6-4f9f-9b5e-08ffbd700543'
  );

  return (
    <HeaderLayout>
      <div className="w-full  ">
        <hr />
      </div>
      <div className="mx-auto max-w-8xl px-6 lg:px-16 mt-5">
        <div className="flex w-full">
          <div className="w-1/2 flex">
            <div className="relative w-full mr-2">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400 -mt-1"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md border-0 bg-white py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  "
                placeholder="Search Contacts, Campaigns, Data and Publisher"
                type="search"
              />
            </div>
            <div className="px-3 border rounded mx-1">
              <select name="" id="" className="px-4 py-2 ">
                <option value="">Industry</option>
              </select>
            </div>
            <div className="px-3 border rounded mx-1">
              <select name="" id="" className="px-4 py-2 ">
                <option value="">Use Case</option>
              </select>
            </div>
            <div className="px-3 border rounded mx-1">
              <select name="" id="" className="px-4 py-2 ">
                <option value="">Geo</option>
              </select>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <Link href={'./persona/new'}>
              <button
                id="button"
                className="text-white   text-lg py-1.5 bg-green-500 rounded px-5"
              >
                New Persona
              </button>
            </Link>
          </div>
        </div>

        {isLoading ? (
          <SkeletonPersona />
        ) : (
          <PersonaList refetch={refetch} personas={data?.data?.data} />
        )}
      </div>
    </HeaderLayout>
  );
};

export default Persona;
