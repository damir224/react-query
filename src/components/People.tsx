import { useState } from 'react';
import { useQuery } from 'react-query';
import fetchPeople, { IData } from '../services/fetchPeople';
import { IPerson } from '../types/IPerson';
import Person from './Person';

const People = () => {
  const [page, setPage] = useState<number>(1);
  console.log(`page`, page)
  const { data, status } = useQuery(['people', page], () => fetchPeople(page), {
    // staleTime: 300000,
    onSuccess: () => console.log('no problema on Planets'),
    keepPreviousData: true,
  });
  return (
    <div>
      <h2>People</h2>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <>
          <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={!data?.next}>
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() => setPage((old) => (!data?.next ? old : page + 1))}
            disabled={!data?.next}
          >
            Next page
          </button>
          <div>
            {data?.results?.map((person: IPerson) => (
              <Person key={person.name} person={person} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default People;
