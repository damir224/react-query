import React from 'react';
import { IPerson } from '../types/IPerson';

const Person = ({ person }: { person: IPerson }) => {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </div>
  );
};

export default Person;
