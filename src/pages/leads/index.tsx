import React, { FC, useState } from 'react';

import FilterLeads from '@/features/leads/components/FilterLeads';
import FormLeads from '@/features/leads/components/FormLead';
import LeadsDetails from '@/features/leads/components/LeadsDetails';
import TableLeads from '@/features/leads/components/LeadsList/TableLeads';
import { Lead } from '@/features/leads/types';
import { HeaderLayout } from '@/layouts/header-layout';

import GridLeads from '../../features/leads/components/LeadsList/GridLeads';


const Leads: FC = () => {
  const [format, setFormat] = useState<string>('grid');
  const [showList, setShowList] = useState<boolean>(false);
  const [newLead, setNewLead] = useState<boolean>(false);
  const [leadDetail, setLeadDetail] = useState<boolean>(false);
  const [leadContact, setLeadContact] = useState<boolean>(true);
  const [leadNotes, setLeadNotes] = useState<boolean>(false);
  const [leadActivity, setLeadActivity] = useState<boolean>(false);
  const [leads, setLeads] = useState<Lead[]>([
    {
      firstName: 'John',
      lastName: 'Doe',
      company: 'ABC Company',
      comments: 'Lorem ipsum dolor sit amet',
      campaign: 'Campaign 1',
      refferer: 'Referrer 1',
      contact: 'Contact 1',
      dealStage: 'Stage 1',
      closingDate: '2022-01-01',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      company: 'XYZ Company',
      comments: 'Lorem ipsum dolor sit amet',
      campaign: 'Campaign 2',
      refferer: 'Referrer 2',
      contact: 'Contact 2',
      dealStage: 'Stage 2',
      closingDate: '2022-02-01',
    },
  ]);
  const [uid, setUid] = useState<number>(0);

  const handleId = (e: React.MouseEvent<any>, index: number) => {
    e.preventDefault();
    setUid(index);
  };

  const ShowLeadContact = () => {
    setLeadContact(true);
    setLeadNotes(false);
    setLeadActivity(false);
  };

  const ShowLeadNotes = () => {
    setLeadContact(false);
    setLeadNotes(true);
    setLeadActivity(false);
  };

  const ShowLeadActivity = () => {
    setLeadContact(false);
    setLeadNotes(false);
    setLeadActivity(true);
  };

  return (
    <HeaderLayout>
      <div className="mx-10">
        <FilterLeads
          format={format}
          newLead={newLead}
          setFormat={setFormat}
          setNewLead={setNewLead}
          setShowList={setShowList}
        />

        <div className="inline-block min-w-full py-2 align-middle">
          {showList ? (
            <TableLeads
              leads={leads}
              setLeadDetail={setLeadDetail}
              handleId={handleId}
            />
          ) : (
            <GridLeads />
          )}
        </div>
      </div>

      <LeadsDetails
        leads={leads}
        leadDetail={leadDetail}
        leadContact={leadContact}
        leadNotes={leadNotes}
        leadActivity={leadActivity}
        setLeadDetail={setLeadDetail}
        ShowLeadContact={ShowLeadContact}
        ShowLeadNotes={ShowLeadNotes}
        ShowLeadActivity={ShowLeadActivity}
        uid={uid}
      />

      <FormLeads newLead={newLead} setNewLead={setNewLead} />
    </HeaderLayout>
  );
};

export default Leads;
