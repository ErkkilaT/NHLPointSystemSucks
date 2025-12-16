import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData';
import {mapStandings} from '../utils/standingsMapper';
const useStandings = () => {
  const [standingsArray, setStandingsArray] = useState([]);
  const getStandings = async () => {
    try {
      const json = await fetchData(`${import.meta.env.BASE_URL}standings.json`);
      const mappedStandings = mapStandings(json.standings);
      setStandingsArray(mappedStandings);
    } catch (error) {
      console.error('error', error);
    }
  };
  useEffect(() => {
    getStandings();
  }, []);
  return {
    standingsArray,
    getStandings,
  };
};
export {useStandings};
