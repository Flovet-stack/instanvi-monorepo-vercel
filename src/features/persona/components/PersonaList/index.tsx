import React from 'react';
import { Persona } from '../../types';
import PersonaItem from '@/features/persona/components/Persona';

export default function PersonaList({
  personas,
  refetch,
}: {
  personas: Persona[];
  refetch: any;
}) {
  return (
    <div className="flex flex-wrap mt-5 gap-3">
      {personas?.map((persona: Persona) => (
        <PersonaItem key={persona?.uuid} persona={persona} refetch={refetch} />
      ))}
    </div>
  );
}
