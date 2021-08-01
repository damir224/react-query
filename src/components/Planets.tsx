import { useQuery } from 'react-query';
import fetchPlanets from '../services/fetchPlanets';
import { IPlanet } from '../types/IPlanet';
import Planet from './Planet';

const Planets = () => {
  const { data, status } = useQuery('planet', fetchPlanets, {
    staleTime: 300000,
    refetchOnMount: true,
  });
  return (
    <div>
      <h2>Planets</h2>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet: IPlanet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
