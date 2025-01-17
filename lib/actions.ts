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
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
  },
]