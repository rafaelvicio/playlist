export const selectTeam = team => {
  return {
    type: "TEAM_SELETED",
    payload: team
  };
};

export default selectTeam;
