export type ProjectTypeShi = {
    name: string,
    description: string,
    appLink: string,
    gitLink: string,
    image: string
}

export type ProjectTypeShiArr = ProjectTypeShi[];


const allProjects : ProjectTypeShiArr = [
    {
        name: "Readily",
        description: "Readily is a modern, full-stack bookstore web application built with Next.js, React, and JavaScript on the frontend, and a robust backend powered by Node.js with RESTful APIs. It integrates MongoDB for seamless book management and user data, deployed on Vercel for scalability and performance.",
        appLink: "https://sahiwl-readily.vercel.app/",
        gitLink: "https://github.com/sahiwl/readily",
        image: "/Readily.png"
    },
    {
        name: "Portfolio Website",
        description: "This portfolio website showcases my work and skills as a web developer. It’s built with Next.js and Tailwind CSS for a sleek, modern design and optimized performance. The site features a responsive layout, interactive components, and smooth navigation to highlight my projects and expertise.",
        appLink: "https://sahiwl.vercel.app/",
        gitLink: "https://github.com/sahiwl/website",
        image: "/portWeb.png"
    },
    {
        name: "To-Do App",
        description: "A minimalist to-do list app to help keep track of daily tasks.Built with Vite and React, it’s fast and super easy to use. Deployed on Vercel for quick access anytime.",
        appLink: "https://sahiwl-todo.vercel.app/",
        gitLink: "https://github.com/sahiwl/Todo-App",
        image: "/todoapp.png"
    },
    {
        name: "WeatherApp",
        description: "A simple weather app that gives you real-time weather info for any city. Built with Vite and React, it’s got a clean UI and fetches data instantly so you can plan your day. Deployed on Vercel for easy access.",
        appLink: "https://howistheweather.vercel.app/",
        gitLink: "https://github.com/sahiwl/weatherApp",
        image: "/wapp.jpg"
    }
  ]

export default allProjects;