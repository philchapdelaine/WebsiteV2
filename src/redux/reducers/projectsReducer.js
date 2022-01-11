const initialState = [
    {
      name: 'Personal Website V2',
      year: 2022,
      description: 'Personal website built using React + Redux.',
      type: 'Front End Dev',
      tech: [
        'React.JS',
        'Redux',
        'Javascript',
        'Figma',
        'HTML/CSS'
      ]
    },
    {
      name: 'AE Proposal Builder',
      year: 2021,
      description: 'Web app to build proposals for new client work.',
      type: 'Front End Dev',
      tech: [
        'React.JS',
        'Node.JS',
        'Redux',
        'Javascript',
        'HTML/CSS',
        '.Net',
        'Figma'
      ]
    },
    {
      name: 'PrologPather',
      year: 2021,
      description: 'UBC pathfinding app, built in Prolog.',
      type: 'Algorithms',
      tech: [
        'Prolog'
      ]
    },
    {
      name: 'Personal Website',
      year: 2021,
      description: 'Personal website built using Gatsby.',
      type: 'Front End Dev',
      tech: [
        'Gatsby.JS',
        'Javascript',
        'HTML/CSS',
        'GraphQL',
        'Figma'
      ]
    },
    {
      name: 'Muscle Monsters',
      year: 2021,
      description: 'Design of a social exercise app for the pandemic.',
      type: 'UX Research',
      tech: [
        'Figma',
        'UX Research Methods'
      ]
    },
    {
      name: 'Park Hangs',
      year: 2020,
      description: 'Web app that displays information on Vancouver parks.',
      type: 'Full Stack Dev',
      tech: [
        'React.JS',
        'Node.JS',
        'HTML/CSS',
        'Redux',
        'Javascript',
      ]
    },
    {
      name: 'Game of Probable Life',
      year: 2020,
      description: "Conway's Game of Life implementation in Haskell.",
      type: 'Algorithms',
      tech: [
        'Haskell'
      ]
    },
    {
      name: 'Rooms and Courses App',
      year: 2019,
      description: "Allows users to query UBC campus data, implemented in Typescript.",
      type: 'Full Stack Dev',
      tech: [
        'Java',
        'Typescript'
      ]
    },
    {
      name: 'Meetup.com UI Revision',
      year: 2018,
      description: "Designed in Figma, based on findngs of a 10-person study.",
      type: 'UX Research',
      tech: [
        'Figma',
        'UX Research Methods'
      ]
    },
    {
      name: 'Soccer Statistics Database',
      year: 2018,
      description: "Database implemented using SQL, hosted on UBC Oracle servers.",
      type: 'Database',
      tech: [
        'SQL',
        'Vue'
      ]
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