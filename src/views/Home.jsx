import {useStandings} from '../hooks/useStandings';
import {useState, useEffect} from 'react';
import TeamRowLong from '../components/TeamRowLong';
import Table from '../components/Table';

const Home = () => {
  //const [menuData, setMenuData] = useState({});
  //const {getStandings} = useStandings();
  const {standingsArray} = useStandings();
  //const [standingsArray, setStandingsArray] = useState([]);
  const columns = [
    {label: 'Team', accessor: 'teamAbbrev.default'},
    {label: 'PTS', accessor: 'points'},
    {label: '321PTS', accessor: 'threeTwoOnePoints'},
    {label: 'W/LPTS', accessor: 'wlPoints'},
    {label: 'GP', accessor: 'gamesPlayed'},
    {label: 'W', accessor: 'wins'},
    {label: 'L', accessor: 'losses'},
    {label: 'OTL', accessor: 'otLosses'},
    {label: 'P%', accessor: 'pointPctg'},
    {label: 'RW', accessor: 'regulationWins'},
    {label: 'OTW', accessor: 'otWins'},
  ];

  return (
    <>
      <h2>NHL Current Standings</h2>
      <Table columns={columns} tableData={standingsArray} />
      {/*} <table>
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
      </table> */}
    </>
  );
};
export default Home;
