import {useStandings} from '../hooks/useStandings';
import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchData';
import TeamRowLong from '../components/TeamRowLong';

const Home = () => {
  //const [menuData, setMenuData] = useState({});
  //const {getStandings} = useStandings();
  const {standingsArray} = useStandings();
  //const [standingsArray, setStandingsArray] = useState([]);

  console.log(standingsArray);

  return (
    <>
      <h2>NHL Current Standings</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>PTS</th>
            <th>321PTS</th>
            <th>W/LPTS</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>OTL</th>

            <th>P%</th>
            <th>RW</th>
            <th>OTW</th>
          </tr>
        </thead>
        <tbody>
          {console.log(standingsArray[0])}
          {standingsArray.map((team) => (
            <TeamRowLong key={team.teamName.default} team={team} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
