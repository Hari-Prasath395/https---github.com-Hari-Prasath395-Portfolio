import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectImg from '../components/ProjectImg'
import ProjectCard from '../components/ProjectCard'
import countdownTimer from "../assets/countdownTimer.png"
import digitalClock from "../assets/Digital clock.png"
import incomeExpense from "../assets/IncomeExpense.png"
import TicTacToe from "../assets/TicTacToe.png"
import Blog from "../assets/Blog.png"
import Weather from "../assets/weather.png"

const Project = () => {

  const projectsData = [
    {
      title: "Project Title 1",
      details: "This project is about a countdown timer for New Year, implemented using HTML, CSS, and JavaScript.",
      imgSrc: countdownTimer,
      viewLink: "https://spectacular-brigadeiros-1c59ea.netlify.app/",
      sourceLink: "https://github.com/Hari-Prasath395/https---github.com-Hari-Prasath395-Count-Down-For-NewYear-JS",
    },
    {
      title: "Project Title 2",
      details: "This project is about a Digital clock, implemented using HTML, CSS, and JavaScript.",
      imgSrc: digitalClock,
      viewLink: "https://cosmic-cannoli-a3fa13.netlify.app/",
      sourceLink: "https://github.com/Hari-Prasath395/https---github.com-Hari-Prasath395-Digital-Clock-JS",
    },
    {
      title: "Project Title 3",
      details: "This project is about income expense tracker, implemented using HTML, CSS, and JavaScript.",
      imgSrc: incomeExpense,
      viewLink: "https://lustrous-gaufre-a99e0e.netlify.app/",
      sourceLink: "https://github.com/Hari-Prasath395/https---github.com-Hari-Prasath395-Income-Expense-Tracker-JS",
    },
    {
      title: "Project Title 4",
      details: "This project is about Tic Tac Toe game, implemented using HTML, CSS, and JavaScript.",
      imgSrc: TicTacToe,
      viewLink: "https://glittering-croquembouche-c65ada.netlify.app/",
      sourceLink: "https://github.com/Hari-Prasath395/https---github.com-Hari-Prasath395-Tic-Tac-Toe-JS",
    },
    {
      title: "Project Title 5",
      details: "This project is about a blogging site implemented using HTML, CSS, JavaScript, Bootstrap, and React. It utilizes a mock API for data retrieval and management",
      imgSrc: Blog,
      viewLink: "https://fastidious-pika-c259f6.netlify.app/",
      sourceLink: "https://github.com/Hari-Prasath395/https---github.com-Hari-Prasath395-Simple-Blogging-site-React",
    },
    {
      title: "Project Title 6",
      details: "This project is about open weather implemented using HTML, CSS, JavaScript, and React. It utilizes a open weather API for data retrieval and management",
      imgSrc: Weather,
      viewLink: "https://dainty-cactus-71213a.netlify.app/",
      sourceLink: "https://github.com/Hari-Prasath395/https---github.com-Hari-Prasath395-Open-Weather-React",
    },

  ];
  
  return (
    <div>
      <Navbar/>
      <ProjectImg heading={'PROJECTS.'} text={'Here are some of my recent works'}/>
      <ProjectCard projectsData={projectsData}/>
      <Footer/>
    </div>
  )
}

export default Project