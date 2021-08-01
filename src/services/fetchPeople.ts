import { QueryKey } from "react-query";

export interface IData {
  results: any;
  count: any;
  next: string;
}

const fetchPeople = async(page: number): Promise<IData> => {
  // const  [_, page]  = queryKey;
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
}

export default fetchPeople;
