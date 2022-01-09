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
      description: 'Web app that displays information on Vancouver parks',
      tech: 
      [
        'Full Stack Dev'
      ]
    },
    {
      name: 'Game of Probable Life',
      year: 2020,
      description: "Conway's Game of Life implementation in Haskell",
      tech: 
      [
        'Algorithms'
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