import { useState } from 'react';
import { useQuery } from 'react-query';
import fetchPlanets from '../services/fetchPlanets';
import { IPlanet } from '../types/IPlanet';
import Planet from './Planet';

const Planets = () => {
  const [page, setPage] = useState<string>('1')
  const { data, status } = useQuery(['planet', page], fetchPlanets, {
    staleTime: 300000,
    onSuccess: () => console.log('no problema with Planets'),
  });
  return (
    <div>
      <h2>Planets</h2>
      <button onClick={() => setPage('1')}>page 1</button>
      <button onClick={() => setPage('2')}>page 2</button>
      <button onClick={() => setPage('3')}>page 3</button>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data?.results?.map((planet: IPlanet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
