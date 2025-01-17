export const allActions = [
  {
    id: "aboutme",
    name: "AboutMe",
    shortcut: ["a"],
    keywords: "about sahiwl",
    perform: () => (window.location.pathname = "aboutme"),
  },
  {
    id: "contact",
    name: "Contact (email)",
    shortcut: ["c"],
    keywords: "email",
  perform: () => {
    window.location.href = "mailto:work.saahilkr@gmail.com";
  }
  },
  {
    id: "links",
    name: "Links",
    shortcut: ["l"],
    keywords: "links",
    perform: () => (window.location.pathname = "links"),
  },{
    id: "listensto",
    name: "Now Listening",
    shortcut: [""],
    keywords: "listensto",
    perform: () => (window.location.pathname = "listensto"),
  },{
    id: "Projects",
    name: "Projects",
    shortcut: ["p"],
    keywords: "project",
    perform: () => (window.location.pathname = "projects"),
  },
]