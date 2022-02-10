import React from "react"
import Project from"./Project"

export default function Projects(){
    const projects=[
        {   
            id:1,
            title:"e-commerce react",
            description:"key technologies used [ReactJs,JSX, Context API,hooks, functional components and react-router-dom] ",
            source:"https://github.com/Didier187/e-commerce-react-app/tree/master/src",
            live:"https://picsum.netlify.app/"
        },{
            id:2,
            title:"movie search app",
            description:"key technologies used [ReactJS,JSX,Functional component UseState, UseEffect, CSS, movie API]",
            source:"https://github.com/Didier187/MovieSearchApp",
            live:"https://nifty-morse-34a6e3.netlify.app/"
        },{
            id:3,
            title:"movie rental API",
            description:"key technologies [nodejs, NPM, Javascript,JSON, HEROKU, Postman], api to manage movie rental with authentication and authorisation",
            source:"https://github.com/Didier187/vidly"
        },
        {
            id:4,
            title:"Speed typing game",
            description:"Simple game to test how fast you can type in 30 seconds build with [ReactJs,Functional components,react hooks, custom hooks,CSS3 and Javascript",
            source:"https://github.com/Didier187/SpeedTypingGame",
            live:"https://unruffled-poitras-80d181.netlify.app/"
        },
        {
            id:5,
            title:"password generator app",
            description:"A web app to generate stion passwords build with [Javascript, HTML5, CSS3",
            source:"https://github.com/Didier187/passwordGenApp",
            live:"https://didier187.github.io/passwordGenApp/"
        },
        {
            id:6,
            title:"task manager API",
            description:"API to manage tasks, create task offers, accept offers and create task assignments key technologies [NPM, NodeJs, Javascript,JSON Postman]",
            source:"https://github.com/Didier187/ODD-JOBS-API"
            
        }
    ]
    let content = projects.map((project) => <Project key={project.id} title={project.title} description={project.description} source={project.source} live={project.live} />)
    return(
        <>
        <h2 className="project_indicator">projects</h2>
        <section className="projects">
            {content}
        </section>
        </>
    )
}