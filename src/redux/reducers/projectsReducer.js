const initialState = [
    {
      name: 'Personal Website V2',
      year: 2022,
      description: 'Personal website built using React + Redux.',
      type: 'Front End Dev',
      details: 
      `Designed my personal website using Figma, and built it using React + Redux.
      It filters my personal projects by type or tech stack.`,
      github: "https://github.com/philchapdelaine/PCWebsite",
      external: 'https://philchapdelaine.com',
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
      details: 
      `Worked with AE to develop a web app to enable them to easily build 
      proposals for new client work.
      Implemented the proposal builder tool using React.JS and CSS, while 
      using Axios to make HTTP requests.
      Unfortunately, I am not allowed to show any design or expose any code.`,
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
      details: 
      `PrologPather is a pathfinding application designed to help the user find the quickest 
      path from point A to point B, implemented entirely in Prolog. 
      It works by comparing time taken values of individual sections of routes,
      and also features options such as including a scenic route, or stopping for a cafe/restaurant.`,
      github: 'https://github.com/philchapdelaine/Prolog-Pather',
      tech: [
        'Prolog'
      ]
    },
    {
      name: 'Personal Website',
      year: 2021,
      description: 'Personal website built using Gatsby.',
      type: 'Front End Dev',
      details: 
      `Designed my personal website using Figma, and built it using Gatsby.JS 
      and CSS, while incorporating Material-UI components.
      Used GraphQL in order to query, sort, and display markdown files 
      representing work experience and projects`,
      github: "https://github.com/philchapdelaine/PCWebsite",
      external: "https://www.philchapdelaine.com",
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
      details: `Designed an application for a social platform that gamified exercise in 
      order to motivate people to get in shape, using Figma.
      Conducted a user study, comparing a design that emulated social 
      media apps vs. a design which got users working out in a single click`,
      external: "https://www.figma.com/file/Edt3eaT27YKO4OEVuC2DTM/444-Design-A?node-id=0%3A1",
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
      details: `Worked in a team to create a platform that allowed users to get 
      information on all official Vancouver Parks.
      Implemented the front end and all endpoints (fetch, add, and delete) for 
      comments, ratings, and events.`,
      github: "https://github.com/cmaija/ParkHangs",
      external: "https://parkhangs-webapp.herokuapp.com",
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
      details: `Used Haskell to implement a simulation of Conway's Game of Life, 
      a zero-player game that is played on a two-dimensional square grid 
      of cells that are either alive or dead based on the following set of rules:`,
      github: "https://github.com/philchapdelaine/game-of-life",
      tech: [
        'Haskell'
      ]
    },
    {
      name: 'Rooms and Courses App',
      year: 2019,
      description: "Allows users to query UBC campus data, implemented in Typescript.",
      type: 'Full Stack Dev',
      details: `An application that parses UBC buildings, rooms, and courses data into data structures 
      and allows users to query on the metadata from around campus. Implemented using Typescript.`,
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
      details: `-	Employed relevant HCI design patterns to perform a 10-person study on proposed 
      revisions to the user interface of meetup.com, using Figma for a medium-fidelity prototype. 
      Used gathered data to revise proposed changes`,
      external: " https://docs.google.com/presentation/d/1kIn1W2Ouae-PNVIzQSCz0EmAkcV6aYAupjInZUlNvj8/edit#slide=id.g4801ce3f0f_3_80",
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
      details: `Designed the outline of a database to store and track soccer statistics.
      Implemented the database using SQL, while using UBC Oracle servers to host the server.
      Allows users to log in, search for a soccer team or player, and enter statistics for a team or player.`,
      github: "https://github.com/roryjf/cpsc304-sports-application",
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
            newState = state.filter(project => project.type === action.projectType || project.tech.includes(action.projectType));
           return newState;
        case "ALL_PROJECTS":
            return initialState;
       default:
          return state
    }
 }
 export default projectsReducer