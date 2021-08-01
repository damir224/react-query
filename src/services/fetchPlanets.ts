const fetchPlanets = async() => {
  const res = await fetch('http://swapi.dev/api/planets/');
  return res.json();
}

export default fetchPlanets;
