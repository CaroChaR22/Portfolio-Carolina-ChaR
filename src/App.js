// aqui se colocan todos los imports 
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <Container > 
        {/* <p>HOLA REACT CON STYLED COMPONENT DESDE APP.JS</p> */}
      </Container>
      <AboutMe></AboutMe>
    </>
  );
}

export default App;
