const TeamRowLong = (props) => {
  const {team} = props;
  const threeTwoOnePoints = () => {
    const twosPoints = (team.wins - team.regulationWins) * 2;
    return team.regulationWins * 3 + twosPoints + team.otLosses;
  };
  return (
    <tr>
      <td>{team.teamAbbrev.default}</td>
      <td>{team.points}</td>
      <td>{threeTwoOnePoints()}</td>
      <td>{(team.points - team.otLosses) / 2}</td>
      <td>{team.gamesPlayed}</td>
      <td>{team.wins}</td>
      <td>{team.losses}</td>
      <td>{team.otLosses}</td>
      <td>{team.pointPctg}</td>
      <td>{team.regulationWins}</td>
      <td>{team.wins - team.regulationWins}</td>
    </tr>
  );
};
export default TeamRowLong;
