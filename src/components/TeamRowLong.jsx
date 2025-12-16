const TeamRowLong = (props) => {
  const {team} = props;
  return (
    <tr>
      <td>{team.teamAbbrev.default}</td>
      <td>{team.points}</td>
      <td>{team.threeTwoOnePoints}</td>
      <td>{team.wlPoints}</td>
      <td>{team.gamesPlayed}</td>
      <td>{team.wins}</td>
      <td>{team.losses}</td>
      <td>{team.otLosses}</td>
      <td>{team.pointPctg}</td>
      <td>{team.regulationWins}</td>
      <td>{team.otWins}</td>
    </tr>
  );
};
export default TeamRowLong;
