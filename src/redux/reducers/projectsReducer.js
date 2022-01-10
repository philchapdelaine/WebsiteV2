const initialProjects = [
    {
      name: 'AE Proposal Builder',
      year: 2021,
      description: 'Web app to build proposals for new client work.',
      tech: 
      [
        'Front End Dev'
      ]
    },
    {
      name: 'PrologPather',
      year: 2021,
      description: 'UBC pathfinding app, built in Prolog.',
      tech: 
      [
        'Algorithms'
      ]
    },
    {
      name: 'Personal Website',
      year: 2021,
      description: 'Personal website built using Gatsby.',
      tech: 
      [
        'Front End Dev'
      ]
    },
    {
      name: 'Muscle Monsters',
      year: 2021,
      description: 'Design of a social exercise app for the pandemic.',
      tech: 
      [
        'UX Research'
      ]
    },
    {
      name: 'Park Hangs',
      year: 2020,
      description: 'Web app that displays information on Vancouver parks.',
      tech: 
      [
        'Full Stack Dev'
      ]
    },
    {
      name: 'Game of Probable Life',
      year: 2020,
      description: "Conway's Game of Life implementation in Haskell.",
      tech: 
      [
        'Algorithms'
      ]
    },
    {
      name: 'Rooms and Courses App',
      year: 2019,
      description: "Allows users to query UBC campus data, implemented in Typescript.",
      tech: 
      [
        'Full Stack Dev'
      ]
    },
    {
      name: 'Meetup.com UI Revision Study',
      year: 2018,
      description: "Designed in Figma, based on findngs of a 10-person study.",
      tech: 
      [
        'UX Research'
      ]
    },
    {
      name: 'Soccer Statistics Database',
      year: 2018,
      description: "Database implemented using SQL, hosted on UBC Oracle servers.",
      tech: 
      [
        'SQL'
      ]
    },
    
  ]  

function projectsReducer(state = initialProjects, action){
    switch (action.type){
       case "FILTER_PROJECTS":
            let newState = state;
            newState = state.filter(project => project.tech.includes(action.skillUsed));
           return newState;
        case "ALL_PROJECTS":
            return initialProjects;
       default:
          return state
    }
 }
 export default projectsReducer