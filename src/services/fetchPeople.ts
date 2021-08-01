const fetchPeople = async() => {
  const res = await fetch('http://swapi.dev/api/people/');
  return res.json();
}

export default fetchPeople;
