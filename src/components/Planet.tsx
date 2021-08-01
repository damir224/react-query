import React from 'react';
import { IPlanet } from '../types/IPlanet';

const Planet = ({ planet }: { planet: IPlanet }) => {
  return (
    <div>
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
