
export type Skills = {
    name: string, 
    url: string
}
export type ProjectTypeShi = {
    name: string,
    description: string,
    appLink: string,
    gitLink: string,
    image: string,
    skills: Skills[]
}

export type ProjectTypeShiArr = ProjectTypeShi[];


const allProjects : ProjectTypeShiArr = [
    {
        name: "SoundLog",
        description: "Welcome to Soundlog, the ultimate social network and music tracking app for album lovers! Inspired by the concept of Letterboxd, Soundlog is your personal space to log, review, and share your album experiences with the world. Whether you're a casual listener or a hardcore audiophile, Soundlog is here to celebrate your love for albums and the stories they tell.",
        appLink: "https://soundlog.sahiwl.live",
        gitLink: "https://github.com/sahiwl/soundlog",
        image: "/soundlog.jpg",
        skills: [
            {
                url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                name:"React"
            },
            {
                url: "https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560",
                name: "Zustand"
            },
            {
                name: "DaisyUI",
                url: "https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png"
            },
            {
                name: "MongoDB",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            },
            {
                name: "Node.js",
                url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "Express",
                url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            },
        ]
    },
    {
        name: "Readily",
        description: "Readly is an eCommerce web app where users can explore a wide library of books, add them to their cart, and place orders to have them delivered to their address. It features a smooth shopping experience with user authentication, detailed book pages, and order tracking — making it easy to discover, buy, and enjoy your next read.",
        appLink: "https://sahiwl-readily.vercel.app/",
        gitLink: "https://github.com/sahiwl/readily",
        image: "/Readily.png",
        skills: [
            {
                name:"React",
                url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            },
            {
                name: "Redux",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
            },
            {
                name: "MongoDB",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            },
            {
                name: "Node.js",
                url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "Express",
                url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            },
            {
                name: "Tailwind",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            }  
        ]
    },
    {
        name: "Portfolio Website",
        description: "This portfolio website showcases my  my projects, skills, and experience as a web developer. Visitors can explore featured work, learn about the technologies I use, and easily access my GitHub or contact me for collaboration.",
        appLink: "https://sahiwl.vercel.app/",
        gitLink: "https://github.com/sahiwl/website",
        image: "/portWeb.png",
        skills: [
            {
                name:"Next.js",
                url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            },
            {
                name: "Typescript",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
                name: "MDX",
                url: "https://www.svgrepo.com/show/354053/mdx.svg"
            },
            {
                name: "Framer-motion",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
            } 
        ]
    },
    // {
    //     name: "To-Do App",
    //     description: "A minimalist to-do list app to help keep track of daily tasks.Built with Vite and React, it’s fast and super easy to use. Deployed on Vercel for quick access anytime.",
    //     appLink: "https://sahiwl-todo.vercel.app/",
    //     gitLink: "https://github.com/sahiwl/Todo-App",
    //     image: "/todoapp.png",
    //     skills: [
    //         {
    //             url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    //             name:"React"
    //         },
    //         {
    //             url: "",
    //             name: "as"
    //         }
                
        
    //     ]
    // },
    {
        name: "How’s the Weather",
        description: "How’s the Weather? is a simple and clean weather app that lets users check real-time weather conditions for any city worldwide. Just type in a location to instantly see the current temperature, weather description, and other details — perfect for quick planning on the go.",
        appLink: "https://howistheweather.vercel.app/",
        gitLink: "https://github.com/sahiwl/howstheweather",
        image: "/wapp.jpg",
        skills: [
            {
                url:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                name:"React"
            },
            {
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                name: "TailwindCSS"
            },
            {
                name: "Javascript",
                url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg  "
            }
        ]
    }
  ]

export default allProjects;