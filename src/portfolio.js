/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import orglogo from "./assets/images/orglogo.png";

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
  username: "Himanshu kumar",
  title: "Hi all, I'm Himanshu",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / React Native / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1m3vCvz_iVJIpprXmxzduODIKzBmpuVAN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harry7705",
  linkedin: "https://www.linkedin.com/in/himanshu-kumar-6436b725a/",
  gmail: "harry770504@gmail.com",
  // Instagram and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
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
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bachelor of Science in Computer Science",
      logo: require("./assets/images/allenhouselogo.jpg"),
      subHeader:
        "Currently, I'm pursuing my B.Tech specialization in Computer Science Engineering branch from Allenhouse Institute of Technology Kanpur.",
      duration: "September 2022 - April 2026"
    },
    {
      schoolName: "Intermediate",
      logo: require("./assets/images/upboard.png"),
      subHeader:
        "I completed my 12th in 2020 from Bhartiya intermediate college Ghorawal, affiliated by the UP Board.",
      duration: "September 2018 - April 2020"
    },
    {
      schoolName: "High School",
      logo: require("./assets/images/upboard.png"),
      subHeader:
        "I completed my 10th in 2018 from Bhartiya intermediate college Ghorawal, affiliated by the UP Board.",
      duration: "September 2016 - April 2018"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/erp.jpg"),
      projectName: "Student Management System",
      projectDesc:
        "A full-featured Student Management System built with Django that helps manage students, teachers, attendance, results, and assignments in an organized and efficient way.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/harry7705/student_management_system"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nexusailogo.png"),
      projectName: "Nexus AI",
      projectDesc:
        "A full-featured AI-powered Interview Simulator built with React + FastAPI that helps users practice HR, behavioral, and technical interviews with a real-time AI interviewer using voice and text.",
      footerLink: [
        {
          name: "Visit Website Soon.",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Tableau Fundamentals for Business Intelligence",
      subtitle:
        "Successfully completed Tableau Fundamentals for Business Intelligence certification from YBI Foundation. Learned data visualization, dashboard creation, analytics, and business intelligence concepts using Tableau for real-world data insights.",
      image: require("./assets/images/ybilogo.png"),
      imageAlt: "View Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1CPsEfEoAHIdAgbubpS4QWnQD0b6vxzZe/view?usp=sharing"
        }
      ]
    },

    {
      title: "Web Application Development Using MERN Stack",
      subtitle:
        "Successfully completed a Value Added Course on Web Application Development using MERN Stack, gaining practical experience in MongoDB, Express.js, React.js, and Node.js for building modern full-stack web applications and responsive user interfaces.",
      image: require("./assets/images/rcpllogo.jpg"),
      imageAlt: "MERN Stack Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1fdoO-oDYJXa42S7B5wbwd7pTdcAEiJl3/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Organization Section

const organizationSection = {
  title: emoji("GitHub Organization 🚀"),
  subtitle: (
    <>
      Building innovative AI and full-stack projects with collaborative
      open-source development and modern technologies.{" "}
      <strong>Anyone can join and contribute</strong> — don’t hesitate to
      collaborate, learn, and build amazing projects together with DevLabs77 🚀
    </>
  ),

  organizations: [
    {
      name: "DevLabs77",
      url: "https://github.com/DevLabs77",
      logo: orglogo,
      description:
        "Founder of DevLabs77 — a collaborative GitHub organization focused on AI-powered applications, MERN stack projects, FastAPI backends, and modern developer tools."
    }
  ],

  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection,
  organizationSection
};
