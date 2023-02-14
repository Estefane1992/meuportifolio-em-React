
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Estefane Melo",
  title: "Olá, Eu sou a Estefane",
  subTitle: emoji(
    "Desenvolvedora de Software Front-end 🚀 com experiência em construir aplicações Web com JavaScript / Reactjs e algumas outras bibliotecas e frameworks interessantes"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Estefane1992",
  linkedin: "https://www.linkedin.com/in/estefane-melo-408a57142/",
  gmail: "fannyczs2012@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDORA FRONT-END APAIXONADA POR TECNOLOGIA",
  skills: [
    emoji(
      "⚡ Desenvolvo interfaces front-end altamente interativas para seus aplicativos web e móveis"
    )
   
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidade Federal do Acre - UFAC",
      logo: require("./assets/images/logo_ufac.png"),
      subHeader: "Letras Inglês",
      duration: "Julho 2014 - Novembro 2019",
      
    },
    {
      schoolName: "Faculdade Focus",
      logo: require("./assets/images/LogoFaculdadeFocus.png"),
      subHeader: "Pós Graduação em Engenharia de Software",
      duration: "Agosto 2022 - Janeiro 2023",
      
    },
    {
      schoolName: "Universidade Salvador - UNIFACS",
      logo: require("./assets/images/unifacs.png"),
      subHeader: "Análise e Desenvolvimento de Sistemas",
      duration: "Cursando",
      
    }
  ]
};

// Your top 2 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    
    {
      Stack: "Programação",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desenvolvedora Front-End",
      company: "JavaPanda",
      companylogo: require("./assets/images/panda_logo.jpg"),
      date: "Janeiro 2021",
      footerLink: [
        {
          name: "Visite",
          url: "http://javapanda.com.br/"
        }
      ]
      

      
    },
    {
      role: "Desenvolvedora Front-End",
      company: "Freelancer",
      companylogo: require("./assets/images/developer.png"),
      date: "2022",
      footerLink: [
        {
          name: "Visite",
          url: "http://estefanedev.com/"
        }
      ]
    },
    
  ]
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos",
  subtitle: "Conheça alguns dos meus projetos",
  projects: [
    {
      image: require("./assets/images/site-javapanda.jpg"),
      projectName: "JavaPanda",
      footerLink: [
        {
          name: "Visite",
          url: "http://javapanda.com.br/"
        }
        //  you can add extra buttons here.
      ]
    }
 
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contate - me ☎️"),
  subtitle:
    "QUER DISCUTIR UM PROJETO? ME MANDE UMA MENSAGEM.",
  number: "+55-71993763244",
  email_address: "fannyczs2012@gmail.com"
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
