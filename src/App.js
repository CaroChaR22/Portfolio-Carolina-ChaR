// aqui se colocan todos los imports 
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects/Projects";


function App() {
  return (
    <>
      <Navbar />
      <Container > 
      <AboutMe />
      <Projects />

      </Container>
      
    </>
  );
}

export default App;
