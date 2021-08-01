import { useQuery } from 'react-query';
import fetchPeople from '../services/fetchPeople';
import { IPerson } from '../types/IPerson';
import Person from './Person';

const People = () => {
  const { data, status } = useQuery('people', fetchPeople, {
    staleTime: 300000,
    // cacheTime: 10,
    refetchOnMount: true,
    onSuccess: () => console.log('no problema'),
  });
  return (
    <div>
      <h2>People</h2>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person: IPerson) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
