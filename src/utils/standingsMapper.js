const mapStandings = (raw) => {
  const result = raw.map((team) => {
    return {
      ...team,
      threeTwoOnePoints:
        team.regulationWins * 3 +
        (team.wins - team.regulationWins) * 2 +
        team.otLosses,
      otWins: team.wins - team.regulationWins,
      wlPoints: (team.points - team.otLosses) / 2,
    };
  });
  return result;
};
export {mapStandings};
