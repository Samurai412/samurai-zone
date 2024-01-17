/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Samurai Jack",
  title: "Web Designer & Content Creator",
  email: "factzduo@gmail.com",
  gitHub: "microsoft",
  instagram: "samur.ai48",
  linkedIn: "https://www.linkedin.com/in/abdallah-arabi-68a10426a/",
  medium: "",
  twitter: "erenfanboy4869",
  youTube: "Code",
};

const primaryColor = "#7A2816";
const secondaryColor = "#CA9D92";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
