import React from "react";
import "./About.css";
import authorImage from "../../assets/project-images/Dr-Minagar.jpg";

const About = () => {
  return (
    <section className="about">
      <img
        src={authorImage}
        alt="Dr. Alireza Minagar"
        className="about__image"
      />
      <div className="about__content">
        <h1 className="about__title">About the Author</h1>
        <p className="about__description">
          Dr. Alireza Minagar is a neurologist, neuroimmunologist,
          bioinformatics scientist, scientific writer, and full-stack software
          engineer with advanced expertise in modern web technologies.
          Passionate about bridging medicine, data, and technology, Dr. Minagar
          brings a rare combination of clinical insight, scientific rigor, and
          technical proficiency to every project.
        </p>
        <p className="about__description">
          This application was developed as part of his final project at
          TripleTen Bootcamp, where he honed his skills in building robust,
          scalable web applications. Concurrently, he served as the Project
          Manager for the Capstone Program at the University of Maryland Global
          Campus (UMGC), where he oversaw three teams of Master of Science-level
          graduate students in Software Engineering. Under his leadership, these
          teams successfully designed, developed, and deployed three full-scale
          applications using Dart, Flutter, Terraform, and AWS services—
          demonstrating his ability to guide technical projects from vision to
          deployment.
        </p>
        <p className="about__description">
          Dr. Minagar believes in the power of interdisciplinary solutions.
          Whether managing cloud infrastructure or crafting user-centric
          interfaces, his work reflects a deep commitment to precision,
          accessibility, and real-world impact. From routing to real-time API
          integration, each component of this project showcases his ability to
          synthesize complex domains into meaningful user experiences.
        </p>
        <p className="about__description">
          Explore this app by searching for topics such as{" "}
          <strong>Neurology</strong>, <strong>Bioinformatics</strong>,{" "}
          <strong>Artificial Intelligence</strong>, <strong>Healthcare</strong>,{" "}
          <strong>Technology</strong>, or <strong>Science</strong>—and
          experience firsthand the kind of work that defines Dr. Minagar’s
          approach.
        </p>
        <p className="about__description">
          🔗 To see more of his work, visit:{" "}
          <a
            href="https://alirezaminagar-md.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://alirezaminagar-md.netlify.app
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
