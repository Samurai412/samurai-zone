/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/paper-1074131_1920.jpg";

const imageAltText = "Texture of paper, because I love the small of paper!";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a DS&AI student at the University Of Petra. I have a passion for learning and challenging my capabilities, as I believe this is the only true way to master concepts.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Data Analysis", "Supervised Machine Learning", "Statistical Analysis"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = "No One Knows What The Outcome Will Be. So, Choose Whatever You'll Regret The Least.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#7A2816",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large" style={{ fontSize: '2em' }}>{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ fontSize: "2em" }}>{skill}</li>
          ))}
        </ul>
        <hr />
      </div>
      <div id="quote">
        <div
          style={{
            backgroundColor: "#7A2816",
            width: "50%",
            padding: "4rem",
            margin: "3rem auto",
            textAlign: "center",
          }}
        >
          <blockquote>
            <span style={{ fontSize: '4em', lineHeight:'1.2', display: 'block' }}>
              <span style={{ fontSize: '3em' }}>&ldquo;</span>
              {detailOrQuote}
              <span style={{ fontSize: '3em', marginLeft:'0.2em' }}>&rdquo;</span>
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;