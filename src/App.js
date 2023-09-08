import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HeroPage from "./components/Hero";
import ContactMe from "./components/ContactMe";
import "./index"
import AboutMe from "./components/AboutMe";


function App() {
  
  return (
    <>
    <body>
      <main id="main">
        <NavBar></NavBar>
        <HeroPage></HeroPage>
        <AboutMe></AboutMe> 
        <ContactMe></ContactMe>
      </main>
    </body>
    </>
  );
}

export default App;
