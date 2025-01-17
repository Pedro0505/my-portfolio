import onlineStore from '../images/online-store.gif';
import pixelArt from '../images/pixel-art.gif';
import todo from '../images/todo.gif';
import timer from '../images/timer.gif';
import trivia from '../images/trivia.gif';
import projectManager from '../images/project-manager.gif';
import webChat from '../images/web-chat.png';
import recipeApp from '../images/recipe-app.png';
import trybeFutebolClub from '../images/trybe-futebol-club.gif';
import ngBank from '../images/ng-bank.gif';
import loanHelper from '../images/loan-helper.gif';
import blog from '../images/blog.png';
import calculateAge from '../services/calculateAge';

const textDeployPt = 'Ir para o deploy';
const textRepositoryPt = 'Ir para o repositório';
const textDeployEn = 'Go to deploy';
const textRepositoryEn = 'Go to repository';

const age = calculateAge(new Date('05/05/2003'));

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
        minha história... Eu tenho ${age} anos, sou de Recife capital de Pernambuco,
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
        title: 'Mape',
        repository: 'https://github.com/Pedro0505/project-manager-frontend',
        deploy: 'https://mape-front.vercel.app',
        image: projectManager,
        content: `Project Manager é um clone FullStack do Trello. Nele você pode criar um quadro no 
        estilo Kanban com todas as funcionalidades de CRUD dos cartões, listas e espaços de trabalho; 
        funcionalidades de arrastar e soltar e autenticação com Auth0.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
      {
        title: 'Ng.Bank',
        repository: 'https://github.com/Pedro0505/ng-bank',
        deploy: '',
        image: ngBank,
        content: `Projeto full-stack que simula um banco digital, com login, registro, autenticação JWT, transações entre contas e histórico dessas transações.`,
        textDeploy: 'Sem deploy ainda :(',
        textRepository: textRepositoryPt,
        dislable: true,
      },
      {
        title: 'Blog',
        repository: 'https://github.com/Pedro0505/blog-web',
        deploy: '',
        image: blog,
        content: `Projeto de um blog pessoal simples para postar algumas ideias, feito com React para o front e NestJs para o back. (Ainda está em desenvolvimento)`,
        textDeploy: 'Sem deploy ainda :(',
        textRepository: textRepositoryPt,
        dislable: true,
      },
      {
        title: 'Loan Helper',
        repository: 'https://github.com/Pedro0505/chat-bot-lexart-labs',
        deploy: 'https://chat-bot-lexart-labs.vercel.app/',
        image: loanHelper,
        content: `O projeto consiste em um chat bot que ajuda você a fazer seu primeiro empréstimo, tirando suas possíveis dúvidas.`,
        textDeploy: textDeployPt,
        textRepository: textDeployPt,
        dislable: false,
      },
      {
        title: 'Trybe Futebol Club',
        repository: 'https://github.com/Pedro0505/Trybe-Futebol-Clube',
        deploy: '',
        image: trybeFutebolClub,
        content: `Projeto de avaliação do módulo de back-end do Trybe onde eu desenvolvi uma Api para uma aplicação front-end já preparada, onde minha Api o alimentava com as informações vindas do banco de dados.`,
        textDeploy: 'Sem deploy ainda :(',
        textRepository: textRepositoryPt,
        dislable: true,
      },
      {
        title: 'Projeto Web Chat',
        repository: 'https://github.com/Pedro0505/web-chat-frontend',
        deploy: 'https://pedro-web-chat.vercel.app',
        image: webChat,
        content: `Um projeto onde desenvolvi um chat em tempo real, usando ReactJs 
        com Context Api no frontend, e para backend utilizei NodeJs com Express e 
        Socket.Io.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
      {
        title: 'Projeto Cronômetro',
        repository: 'https://github.com/Pedro0505/Cronometro-React-TS',
        deploy: 'https://pedrodev-cronometro.vercel.app/',
        image: timer,
        content: `Um timer feito com React TypeScript, foi minha primeira experiência com
        o typescript que me ajudou a firmar conceitos da linguagem.`,
        textDeploy: textDeployPt,
        textRepository: textRepositoryPt,
      },
      {
        title: 'Projeto Trivia Redux',
        repository: 'https://github.com/Pedro0505/projeto-trivia-redux',
        deploy: 'https://pedro-silva-trivia-redux.vercel.app',
        image: trivia,
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
        image: recipeApp,
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
        image: onlineStore,
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
        image: pixelArt,
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
        image: todo,
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
        bit of my story... I'm ${age} years old, I'm from Recife, capital of Pernambuco, 
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
        title: 'Mape',
        repository: 'https://github.com/Pedro0505/project-manager-frontend',
        deploy: 'https://mape-front.vercel.app',
        image: projectManager,
        content: `Project Manager is a FullStack clone of Trello. In it you can create a Kanban-style 
        board with all the CRUD features of cards, lists and workspaces; drag and drop functionality 
        and authentication with Auth0.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Ng.Bank',
        repository: 'https://github.com/Pedro0505/ng-bank',
        deploy: '',
        image: ngBank,
        content: `Full-stack project that simulates a digital bank, with login, registration, JWT authentication, transactions between accounts and history of these transactions.`,
        textDeploy: 'No deploy yet :(',
        textRepository: textRepositoryEn,
        dislable: true,
      },
      {
        title: 'Blog',
        repository: 'https://github.com/Pedro0505/blog-web',
        deploy: '',
        image: blog,
        content: `Project for a simple personal blog to post some ideas, made with React for the front and NestJs for the back. (Still in development)`,
        textDeploy: 'No deploy yet :(',
        textRepository: textRepositoryEn,
        dislable: true,
      },
      {
        title: 'Loan Helper',
        repository: 'https://github.com/Pedro0505/chat-bot-lexart-labs',
        deploy: 'https://chat-bot-lexart-labs.vercel.app/',
        image: loanHelper,
        content: `The application consists of a chat bot that helps you make your first loan, clearing your possible doubts.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
        dislable: false,
      },
      {
        title: 'Trybe Futebol Club',
        repository: 'https://github.com/Pedro0505/Trybe-Futebol-Clube',
        deploy: '',
        image: trybeFutebolClub,
        content: `Trybe's back-end module evaluation project where I developed an Api for an already prepared front-end application, where my Api fed it with information coming from the database.`,
        textDeploy: 'No deploy yet :(',
        textRepository: textRepositoryEn,
        dislable: true,
      },
      {
        title: 'Projeto Web Chat',
        repository: 'https://github.com/Pedro0505/web-chat-front',
        deploy: 'https://pedro-web-chat.vercel.app',
        image: webChat,
        content: `A project where I developed a real-time chat, using ReactJs with 
        Context Api on the frontend, and for the backend I used NodeJs with Express 
        and Socket.Io.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Projeto Cronômetro',
        repository: 'https://github.com/Pedro0505/Cronometro-React-TS',
        deploy: 'https://pedrodev-cronometro.vercel.app/',
        image: timer,
        content: `A timer made with React TypeScript, it was my first experience with
        the typescript that helped me to establish concepts of the language.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Projeto Trivia Redux',
        repository: 'https://github.com/Pedro0505/projeto-trivia-redux',
        deploy: 'https://pedro-silva-trivia-redux.vercel.app',
        image: trivia,
        content: `Project made using the agile methodology Scrum in a groupfor the first time the 
        concept of global state, in this project we use Reduxso we can use it and apply redux thunk 
        to handle the requests.`,
        textDeploy: textDeployEn,
        textRepository: textRepositoryEn,
      },
      {
        title: 'Projeto Recipe App',
        repository: 'https://github.com/Pedro0505/projeto-recipe-app',
        deploy: 'https://projeto-recipe-app.vercel.app',
        image: recipeApp,
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
        image: onlineStore,
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
        image: pixelArt,
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
        image: todo,
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
