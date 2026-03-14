const players = [
  {
    id: 1,
    name: "Josh Allen",
    team: "Buffalo Bills",
    teamShort: "BUF",
    position: "QB",
    fantasyPoints: 364.6,
    fantasyPpg: 21.4,
    fantasyFinishOverall: 2,
    fantasyFinishPosition: 1
  },
  {
    id: 2,
    name: "Christian McCaffrey",
    team: "San Francisco 49ers",
    teamShort: "SF",
    position: "RB",
    fantasyPoints: 365.6,
    fantasyPpg: 21.5,
    fantasyFinishOverall: 1,
    fantasyFinishPosition: 1
  },
  {
    id: 3,
    name: "Drake Maye",
    team: "New England Patriots",
    teamShort: "NE",
    position: "QB",
    fantasyPoints: 351.5,
    fantasyPpg: 20.7,
    fantasyFinishOverall: 3,
    fantasyFinishPosition: 2
  },
  {
    id: 4,
    name: "Jordan Love",
    team: "Green Bay Packers",
    teamShort: "GB",
    position: "QB",
    fantasyPoints: 235.1,
    fantasyPpg: 15.7,
    fantasyFinishOverall: 31,
    fantasyFinishPosition: 12
  },
  {
    id: 5,
    name: "Jonathan Taylor",
    team: "Indianapolis Colts",
    teamShort: "IND",
    position: "RB",
    fantasyPoints: 339.3,
    fantasyPpg: 20.0,
    fantasyFinishOverall: 5,
    fantasyFinishPosition: 2
  },
  {
    id: 6,
    name: "Jahmyr Gibbs",
    team: "Detroit Lions",
    teamShort: "DET",
    position: "RB",
    fantasyPoints: 328.4,
    fantasyPpg: 19.3,
    fantasyFinishOverall: 8,
    fantasyFinishPosition: 4
  },
  {
    id: 7,
    name: "Puka Nacua",
    team: "Los Angeles Rams",
    teamShort: "LAR",
    position: "WR",
    fantasyPoints: 310.5,
    fantasyPpg: 19.4,
    fantasyFinishOverall: 11,
    fantasyFinishPosition: 1
  },
  {
    id: 8,
    name: "Jaxon Smith-Njigba",
    team: "Seattle Seahawks",
    teamShort: "SEA",
    position: "WR",
    fantasyPoints: 300.4,
    fantasyPpg: 17.7,
    fantasyFinishOverall: 13,
    fantasyFinishPosition: 2
  },
  {
    id: 9,
    name: "Amon-Ra St. Brown",
    team: "Detroit Lions",
    teamShort: "DET",
    position: "WR",
    fantasyPoints: 265.5,
    fantasyPpg: 15.6,
    fantasyFinishOverall: 22,
    fantasyFinishPosition: 4
  },
  {
    id: 10,
    name: "Trey McBride",
    team: "Arizona Cardinals",
    teamShort: "ARI",
    position: "TE",
    fantasyPoints: 252.9,
    fantasyPpg: 14.9,
    fantasyFinishOverall: 23,
    fantasyFinishPosition: 1
  }
  // {
  //   id: 11,
  //   name: "Lamar Jackson",
  //   team: "Baltimore Ravens",
  //   teamShort: "BAL",
  //   position: "QB",
  //   fantasyPoints: 214.9,
  //   fantasyPpg: 16.5,
  //   fantasyFinishOverall: 40,
  //   fantasyFinishPosition: 19
  // },
  // {
  //   id: 12,
  //   name: "George Pickens",
  //   team: "Dallas Cowboys",
  //   teamShort: "DAL",
  //   position: "WR",
  //   fantasyPoints: 245.4,
  //   fantasyPpg: 14.4,
  //   fantasyFinishOverall: 26,
  //   fantasyFinishPosition: 5
  // },
  // {
  //   id: 13,
  //   name: "George Kittle",
  //   team: "San Francisco 49ers",
  //   teamShort: "SF",
  //   position: "TE",
  //   fantasyPoints: 155.2,
  //   fantasyPpg: 9.1,
  //   fantasyFinishOverall: 92,
  //   fantasyFinishPosition: 6
  // },
  // {
  //   id: 14,
  //   name: "Kenneth Walker III",
  //   team: "Seattle Seahawks",
  //   teamShort: "SEA",
  //   position: "RB",
  //   fantasyPoints: 176.4,
  //   fantasyPpg: 10.4,
  //   fantasyFinishOverall: 65,
  //   fantasyFinishPosition: 20
  // },
  // {
  //   id: 15,
  //   name: "Kyle Pitts",
  //   team: "Atlanta Falcons",
  //   teamShort: "ATL",
  //   position: "TE",
  //   fantasyPoints: 166.8,
  //   fantasyPpg: 9.8,
  //   fantasyFinishOverall: 76,
  //   fantasyFinishPosition: 4
  // },
  // {
  //   id: 16,
  //   name: "Justin Jefferson",
  //   team: "Minnesota Vikings",
  //   teamShort: "MIN",
  //   position: "WR",
  //   fantasyPoints: 159.5,
  //   fantasyPpg: 9.4,
  //   fantasyFinishOverall: 85,
  //   fantasyFinishPosition: 19
  // },
  // {
  //   id: 17,
  //   name: "Derrick Henry",
  //   team: "Baltimore Ravens",
  //   teamShort: "BAL",
  //   position: "RB",
  //   fantasyPoints: 272.0,
  //   fantasyPpg: 16.0,
  //   fantasyFinishOverall: 20,
  //   fantasyFinishPosition: 8
  // },
  // {
  //   id: 18,
  //   name: "Keenan Allen",
  //   team: "Chicago Bears",
  //   teamShort: "CHI",
  //   position: "WR",
  //   fantasyPoints: 182.7,
  //   fantasyPpg: 10.7,
  //   fantasyFinishOverall: 57,
  //   fantasyFinishPosition: 12
  // },
  // {
  //   id: 19,
  //   name: "Romeo Doubs",
  //   team: "Green Bay Packers",
  //   teamShort: "GB",
  //   position: "WR",
  //   fantasyPoints: 171.9,
  //   fantasyPpg: 10.7,
  //   fantasyFinishOverall: 69,
  //   fantasyFinishPosition: 14
  // },
  // {
  //   id: 20,
  //   name: "Patrick Mahomes",
  //   team: "Kansas City Chiefs",
  //   teamShort: "KC",
  //   position: "QB",
  //   fantasyPoints: 285.2,
  //   fantasyPpg: 20.4,
  //   fantasyFinishOverall: 19,
  //   fantasyFinishPosition: 8
  // }
];

export default players