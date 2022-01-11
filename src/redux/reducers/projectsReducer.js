const initialState = [
    {
      name: 'Personal Website V2',
      year: 2022,
      description: 'Personal website built using React + Redux.',
      type: 'Front End Dev'
    },
    {
      name: 'AE Proposal Builder',
      year: 2021,
      description: 'Web app to build proposals for new client work.',
      type: 'Front End Dev'
    },
    {
      name: 'PrologPather',
      year: 2021,
      description: 'UBC pathfinding app, built in Prolog.',
      type: 'Algorithms'
    },
    {
      name: 'Personal Website',
      year: 2021,
      description: 'Personal website built using Gatsby.',
      type: 'Front End Dev'
    },
    {
      name: 'Muscle Monsters',
      year: 2021,
      description: 'Design of a social exercise app for the pandemic.',
      type: 'UX Research'
    },
    {
      name: 'Park Hangs',
      year: 2020,
      description: 'Web app that displays information on Vancouver parks.',
      type: 'Full Stack Dev'
    },
    {
      name: 'Game of Probable Life',
      year: 2020,
      description: "Conway's Game of Life implementation in Haskell.",
      type: 'Algorithms'
    },
    {
      name: 'Rooms and Courses App',
      year: 2019,
      description: "Allows users to query UBC campus data, implemented in Typescript.",
      type: 'Full Stack Dev'
    },
    {
      name: 'Meetup.com UI Revision',
      year: 2018,
      description: "Designed in Figma, based on findngs of a 10-person study.",
      type: 'UX Research'
    },
    {
      name: 'Soccer Statistics Database',
      year: 2018,
      description: "Database implemented using SQL, hosted on UBC Oracle servers.",
      type: 'Database'
    },
    
  ]  

function projectsReducer(state = initialState, action){
    switch (action.type){
       case "FILTER_PROJECTS":
            let newState = state;
            newState = state.filter(project => project.type === action.projectType);
           return newState;
        case "ALL_PROJECTS":
            return initialState;
       default:
          return state
    }
 }
 export default projectsReducer