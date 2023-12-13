import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Table from './table';
import { useWatch } from 'react-hook-form';
import { NextRouter, useRouter } from 'next/router';

export const Example: FC = () => {
  const router: NextRouter = useRouter();
  const [saveData, setSaveData] = useState<string[] | undefined>();
  const redirect: string = router.query.redirect as string;

  useEffect(() => {
    setSaveData(JSON.parse(localStorage.getItem('channel') || 'false'));
  }, [saveData]);

  // click button to continue the saved drafted
  const handleDraft = (e: any) => {
    e.preventDefault();
    router.replace(redirect || '/publisher/channel/personalDetail');
  };

  // click button to create a new Channel
  const handleNew = (e: any) => {
    e.preventDefault();
    localStorage.removeItem('channel');
    router.replace(redirect || '/publisher/channel/personalDetail');
  };

  return (
    <div className="body oveflow-y-none">
      <div className="mx-auto max-w-8xl px-4 sm:px-12 lg:px-12">
        <div className="w-full flex justify-end my-3 flex ">
          {saveData ? (
            <>
              <button
                onClick={handleDraft}
                className="flex px-4 py-2 rounded mr-3 text-white bg-red-800"
              >
                <i className="ri-draft-line text-white mr-1"></i>Draft
              </button>
            </>
          ) : (
            <></>
          )}
          <button
            className="flex px-4 py-2 rounded"
            id="button"
            onClick={handleNew}
          >
            <i className="ri-add-line text-white mr-1"></i>New Channel
          </button>
        </div>
        <Table />
      </div>
    </div>
  );
};
