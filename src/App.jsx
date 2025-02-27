import React from "react";
import Layout from "./components/Layout";
import About from "./components/About";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <h1>My NOROFF Portfolio 2</h1>
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </Layout>
  );
}

export default App;
