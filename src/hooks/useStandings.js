import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData';
const useStandings = () => {
  const [standingsArray, setStandingsArray] = useState([]);
  const getStandings = async () => {
    try {
      const json = await fetchData(`${import.meta.env.BASE_URL}standings.json`);
      setStandingsArray(json.standings);
      console.log('poo');
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
