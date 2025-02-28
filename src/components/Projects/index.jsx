import React from "react";
import * as S from "./index.styles";

/**
 * Projects Component
 *
 * Displays a list of projects in a structured layout with project details,
 * images, and links to GitHub repositories and live sites.
 *
 * @component
 * @returns {JSX.Element} The rendered Projects section.
 */

const projects = [
  {
    title: "Project Exam 2 - Holidaze",
    image: "/images/holidaze.png",
    alt: "A screenshot of my website called Holidaze",
    description:
      "The project involved building a modern front-end interface for a booking platform, which includes both a customer-facing side for browsing and booking venues, and an admin-facing side for managing venues and bookings. Features like user registration, venue management, and booking functionality were essential, with a focus on accessibility, responsiveness, and smooth user interaction.",
    github: "https://github.com/StianL82/Project-Exam-2",
    live: "https://project-exam-2-stianl.netlify.app/",
  },
  {
    title: "JS Framework CA - Spendit",
    image: "/images/jsf.png",
    alt: "A screenshot of my website called Spendit - Brønnøysund Community Science Museum",
    description:
      "This course assignment focused on applying React to build a fully functional eCommerce store. The goal was to create an intuitive shopping experience with product listings, cart management, and a checkout process. The project included key features such as a homepage with a search bar, an individual product page, a cart page, a checkout success page, and a contact page. Product data was dynamically fetched from the Noroff API, ensuring real-time updates. The project provided valuable hands-on experience with React, React Router, and state management.",
    github: "https://github.com/StianL82/js-frameworks-ca",
    live: "https://js-framework-ca-spendit.netlify.app/",
  },
  {
    title: "Semester Project 2 - AuctionHouse",
    image: "/images/sp2.png",
    alt: "A screenshot of my website called AuctionHouse",
    description:
      "This project is a front-end application for an auction platform, where registered users can create listings and participate in auctions. Users receive 1000 credits upon registration, which they can use to bid on items or earn by selling their own items. While non-registered users can browse through the listings, only registered users are allowed to place bids. The site is designed with a focus on usability, and it integrates seamlessly with the provided API.",
    github: "https://github.com/StianL82/SemesterProject-2",
    live: "https://semester-project-2-stianl.netlify.app/",
  },
];

const Projects = () => {
  return (
    <S.ProjectsContainer>
      <h2 id="projects">Projects</h2>
      <S.ProjectsGrid>
        {projects.map((project, index) => (
          <S.Card key={index}>
            <S.CardImage>
              <img src={project.image} alt={project.alt} />
            </S.CardImage>
            <S.CardInfo>
              <h3>{project.title}</h3>
              <h4>Project description</h4>
              <p>{project.description}</p>
              <S.CardButtons>
                <S.Button as="a" href={project.github} target="_blank">
                  GitHub Repository
                </S.Button>
                <S.Button as="a" href={project.live} target="_blank">
                  View the Live Site
                </S.Button>
              </S.CardButtons>
            </S.CardInfo>
          </S.Card>
        ))}
      </S.ProjectsGrid>
    </S.ProjectsContainer>
  );
};

export default Projects;
