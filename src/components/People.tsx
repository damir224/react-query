import { useState } from 'react';
import { useQuery } from 'react-query';
import fetchPeople, { IData } from '../services/fetchPeople';
import { IPerson } from '../types/IPerson';
import Person from './Person';

const People = () => {
  const [page, setPage] = useState<string>('1')
  const { data, status } = useQuery(['people', page], fetchPeople, {
    staleTime: 300000,
    onSuccess: () => console.log('no problema on Planets'),
  });
  return (
    <div>
      <h2>People</h2>
      <button onClick={() => setPage('1')}>page 1</button>
      <button onClick={() => setPage('2')}>page 2</button>
      <button onClick={() => setPage('3')}>page 3</button>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data?.results?.map((person: IPerson) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
