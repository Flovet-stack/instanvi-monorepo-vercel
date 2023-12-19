import React, { useState, useContext, ChangeEvent } from 'react';
// import { AuthContext } from '@/components/context/context';
// import { CurrentUserContext } from '@/pages/_app';
import { userContext } from '@/Components/context/context'


interface AppProps { }

const App: React.FC<AppProps> = () => {
  const data = useContext(userContext);

  return (
    <div className="w-full flex justify-center">
      <div className="mt-48 flex justify-center w-2/3">
        <div className="w-full">
          <label htmlFor="" className="text-left text-lg mb-5">
            Username
          </label>
          <input
            type="text"
            value={data?.usern}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              data?.setUsern(e.target.value);
            }}
            className="w-full rounded py-2.5 border pl-2 mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
