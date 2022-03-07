const textDeployPt = 'Ir para o deploy';
const textRepositoryPt = 'Ir para o repositório';
const textDeployEn = 'Go to deploy';
const textRepositoryEn = 'Go to repository';

const langague = {
  Português: {
    footer: {
      developed: 'Desenvolvido e estilizado por',
      credits: 'Feito com React e CSS',
    },
    home: {
      headingH1: 'Olá!! Seja Bem Vindo(a),',
      paragraph: 'Meu nome é Pedro, e esse é meu Portfólio.',
    },
    notfound: {
      headingH1: 'Você Foi Longe De Mais...',
    },
    contacts: {
      headingH1: 'Contatos',
    },
    header: {
      navHome: 'Página Inicial',
      navAbout: 'Sobre Mim',
      navContacts: 'Contatos',
      navProjects: 'Projetos',
    },
    aboutme: {
      about: {
        headingAbout: 'Um Pouco Sobre Mim...',
        content: `Olá!!! Meu nome é Pedro e aqui eu vou contantar um pouco da
        minha história... Eu tenho 18 anos, sou de Recife capital de Pernambuco,
        entrei no mundo da programação em julho de 2021, quando comecei a estudar
        pela Trybe, onde me apaixonei por essa área, a minha decisão de entrar para
        o mundo da programação veio após um período de indecisão do que fazer depois
        de terminar a escola, me vi entrando em uma faculdade que não me encaixava,
        então quando descobri sobre a Trybe eu logo percebi que era nesse lugar que eu
        queria me formar e programar era algo que eu queria fazer pelo resto da minha
        vida. E assim iniciou minha jornada nesse incrível mundo.`,
      },
      headingSkills: 'Minhas Habilidades',
    },
    projectHeading: 'Projetos',
    project: [
      {
        title: 'Projeto Web Chat',
        repository: 'https://github.com/Pedro0505/web-chat-front',
        deploy: '',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/web-chat.png?raw=true',
        content: `Um projeto onde desenvolvi um chat em tempo real, usando ReactJs 
        com Context Api no frontend, e para backend utilizei NodeJs com Express e 
        Socket.Io. (Ainda está em desenvolvimento)`,
        textDeploy: 'Sem deploy...',
        textRepository: textRepositoryPt,
        dislable: true,
      },
      {
        title: 'Projeto Cronômetro',
        repository: 'https://github.com/Pedro0505/Cronometro-React-TS',
        deploy: 'https://pedrodev-cronometro.vercel.app/',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/timer.gif?raw=true',
        content: `Um timer feito com React TypeScript, foi minha primeira experiência com
        o typescript que me ajudou a firmar conceitos da linguagem.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
      {
        title: 'Projeto Trivia Redux',
        repository: 'https://github.com/Pedro0505/projeto-trivia-redux',
        deploy: 'https://pedro-silva-trivia-redux.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/trivia.gif?raw=true',
        content: `Projeto feito em grupo utilizando a metodologia ágil Scrum onde usamos 
        pela  primeira vez o conceito de  estado global, nesse projeto utilizamos o Redux 
        para podermos usá-lo e aplicamos o redux thunk para lidarmos com as requisições.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
      {
        title: 'Projeto Recipe App',
        repository: 'https://github.com/Pedro0505/projeto-recipe-app',
        deploy: 'https://projeto-recipe-app.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/recipe-app.png?raw=true',
        content: `Projeto desenvolvido em grupo, onde nós usamos ReactJs com Context Api, 
        onde fizemos teste de integração para a aplicação, nele desenvolvemos um app 
        de receitas.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
      {
        title: 'Projeto FrontEnd Online Store',
        repository: 'https://github.com/Pedro0505/projeto-frontend-online-store',
        deploy: 'https://pedro-silva-fonline-store.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/online-store.gif?raw=true',
        content: `Projeto em grupo onde utilizamos a metodologia ágil Scrum para 
        o desenvolvimento, nessa aplicação usamos a Api do mercado livre para criarmos
        uma pequena lojinha virtual.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
      {
        title: 'Projeto Pixel Art',
        repository: 'https://github.com/Pedro0505/projeto-pixel-art',
        deploy: 'https://pedro-silva-pixel-art.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/pixel.gif?raw=true',
        content: `Esse foi o primeiro projeto que fiz manipulando o DOM e feito somente 
        com Javascript, Html5 e CSS a aplicação consiste em conseguir desenhar pixel
        arts simples usando o browser.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
      {
        title: 'Projeto ToDo List',
        repository: 'https://github.com/Pedro0505/projeto-to-do-list',
        deploy: 'https://pedro-silva-todo-list.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/todo.gif?raw=true',
        content: `Aplicação feita com Javascript, Html5 e CSS foi um dos primeiros 
        projetos que fiz manipulando o DOM, a aplicação é um To Do List com algumas
        funcionalidades.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
    ],
  },
  English: {
    footer: {
      developed: 'Developed and styled by',
      credits: 'Made with React and CSS',
    },
    home: {
      headingH1: 'Hello!! Welcome,',
      paragraph: 'My name is Pedro, and this is my Portfolio.',
    },
    notfound: {
      headingH1: 'You\'ve Gone Too Far...',
    },
    contacts: {
      headingH1: 'Contacts',
    },
    header: {
      navHome: 'Home',
      navAbout: 'About Me',
      navContacts: 'Contacts',
      navProjects: 'Projects',
    },
    aboutme: {
      about: {
        headingAbout: 'A Little About Myself...',
        content: `Hi!!! My name is Pedro and here I'm going to tell you a little 
        bit of my story... I'm 18 years old, I'm from Recife, capital of Pernambuco, 
        I entered the programming world in July 2021, when I started studying at Trybe, 
        where I fell in love with In this area, my decision to enter the world of 
        programming came after a period of indecision of what to do after finishing 
        school, I found myself entering a college that didn't fit me, so when I found 
        out about Trybe I soon realized that it was this place where I wanted to graduate 
        and programming was something I wanted to do for the rest of my life. And so began
        my journey in this amazing world.`,
      },
      headingSkills: 'My Skills',
    },
    projectHeading: 'Projects',
    project: [
      {
        title: 'Projeto Web Chat',
        repository: 'https://github.com/Pedro0505/web-chat-front',
        deploy: '',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/web-chat.png?raw=true',
        content: `A project where I developed a real-time chat, using ReactJs with 
        Context Api on the frontend, and for the backend I used NodeJs with Express 
        and Socket.Io. (Still in development)`,
        textDeploy: 'No deploy yet...',
        textRepository: textRepositoryEn,
        dislable: true,
      },
      {
        title: 'Projeto Cronômetro',
        repository: 'https://github.com/Pedro0505/Cronometro-React-TS',
        deploy: 'https://pedrodev-cronometro.vercel.app/',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/timer.gif?raw=true',
        content: `A timer made with React TypeScript, it was my first experience with
        the typescript that helped me to establish concepts of the language.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Projeto Trivia Redux',
        repository: 'https://github.com/Pedro0505/projeto-trivia-redux',
        deploy: 'https://pedro-silva-trivia-redux.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/trivia.gif?raw=true',
        content: `Projeto feito em grupo utilizando a metodologia ágil Scrum onde usamos 
        pela  primeira vez o conceito de  estado global, nesse projeto utilizamos o Redux 
        para podermos usá-lo e aplicamos o redux thunk para lidarmos com as requisições.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Projeto Recipe App',
        repository: 'https://github.com/Pedro0505/projeto-recipe-app',
        deploy: 'https://projeto-recipe-app.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/recipe-app.png?raw=true',
        content: `Project developed as a group, where we used ReactJs with Context 
        Api, where we did integration testing for the application, in which we developed 
        a recipe app.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Projeto FrontEnd Online Store',
        repository: 'https://github.com/Pedro0505/projeto-frontend-online-store',
        deploy: 'https://pedro-silva-fonline-store.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/online-store.gif?raw=true',
        content: `Group project where we use the agile Scrum methodology to
        development, in this application we use the free market API to create
        a small virtual store.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Projeto Pixel Art',
        repository: 'https://github.com/Pedro0505/projeto-pixel-art',
        deploy: 'https://pedro-silva-pixel-art.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/pixel.gif?raw=true',
        content: `This was the first project that I did manipulating the DOM and done only
        with Javascript, Html5 and CSS the application consists of being able to draw 
        pixel simple arts using the browser.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Projeto ToDo List',
        repository: 'https://github.com/Pedro0505/projeto-to-do-list',
        deploy: 'https://pedro-silva-todo-list.vercel.app',
        image: 'https://github.com/Pedro0505/my-portfolio/blob/main/src/images/todo.gif?raw=true',
        content: `Application made with Javascript, Html5 and CSS was one of the first
        projects I made manipulating the DOM, the application is a To Do List with some
        functionalities.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
    ],
  },
};

export default langague;
