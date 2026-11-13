import { createContext } from "react";
export const ProjeContext = createContext();
export const ProjeProvider = ({ children }) => {
  const projectsArray = [
    {
      id: 10,
      name: "Todo app",
      description:
        "A modern and responsive To-Do app focused on seamless user experience, developed using React, TypeScript, and clean CSS.",
      photo: "proje1.png",
      link: "https://todo-app-revanjafarli.vercel.app/",
      gitHubLink: "https://github.com/RavanJafar2607/Todo-App",
    },
    {
      id: 20,
      name: "E-commerce wep site",
      description:
        "A modern and fully responsive E-commerce website built with React, TypeScript, and CSS, featuring real-time data fetched from the Fake Store API.",
      photo: "proje2.png",
      link: "https://revan-jafarli-ecommerce-website.vercel.app/",
      gitHubLink: "https://github.com/RavanJafar2607/Ecommerce-Website",
    },
    {
      id: 30,
      name: "Weather-app",
      description:
        "A modern, fully responsive Weather app built with React, TypeScript, and CSS, designed with a focus on user experience and secure real-time API integration.",
      photo: "proje3.png",
      link: "https://ravan-jafarli-weather-app.vercel.app/",
      gitHubLink: "https://github.com/RavanJafar2607/Weather-APP",
    },
    {
      id: 40,
      name: "Mental-Health app",
      description:
        "A modern, fully responsive Mental Health and Wellbeing web application built with React, TypeScript, and CSS. The platform features secure user authentication and personalized session management powered by Firebase Auth, designed with a strong focus on user privacy and seamless user experience.",
      photo: "proje4.png",
      link: "https://ravan-jafarli-mental-healthwebsite.vercel.app/",
      gitHubLink: "https://github.com/RavanJafar2607/Mental-Health-Website",
    },
  ];
  return (
    <ProjeContext.Provider value={{ projectsArray }}>
      {children}
    </ProjeContext.Provider>
  );
};
