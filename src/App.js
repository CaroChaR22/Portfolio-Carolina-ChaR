// aqui se colocan todos los imports
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contacts/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <AboutMe />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;
