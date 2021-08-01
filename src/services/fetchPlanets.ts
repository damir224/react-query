import { QueryKey } from "react-query";
import { IData } from "./fetchPeople";

const fetchPlanets = async({queryKey}: {queryKey: QueryKey[]}): Promise<IData> => {
  const  [_, page]  = queryKey;
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
}

export default fetchPlanets;
