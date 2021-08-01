import { QueryKey } from "react-query";

export interface IData {
  results: any;
}

const fetchPeople = async({queryKey}: {queryKey: QueryKey[]}): Promise<IData> => {
  const  [_, page]  = queryKey;
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
}

export default fetchPeople;
