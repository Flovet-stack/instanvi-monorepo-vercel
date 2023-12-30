'use client';

import React, { useEffect } from 'react';
import { useAppSelector } from '../../lib/redux/hooks';
// import { getAllPeopleThunk } from '../../lib/redux/slices/people/thunk';
import { getAllPeople } from '../../api/people.api';
import { RootState } from '../../lib/redux/store';
import { PeopleTable } from './components';

const PeoplePage = () => {
  // const dispatch = useAppDispatch();

  const { project } = useAppSelector((state: RootState) => state.project);

  const handleGetAllPeople = async () => {
    console.log('🚀 ~ file: page.tsx:14 ~ getAllPeople ~ test:');
    // dispatch(getAllPeopleThunk);
    try {
      const response = await getAllPeople(project?.uuid as string);
      console.log(
        '🚀 ~ file: page.tsx:18 ~ handleGetAllPeople ~ response:',
        response
      );
    } catch (error) {
      console.log(
        '🚀 ~ file: page.tsx:20 ~ handleGetAllPeople ~ error:',
        error
      );
    }
  };

  useEffect(() => {
    console.log('🚀 ~ file: page.tsx:15 ~ useEffect ~ test');
    handleGetAllPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="people-page">
      <PeopleTable />
    </div>
  );
};

export default PeoplePage;
