import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import viteLogo from "./assets/vite.svg"

export default function App() {
  //Área declarativa
  //let nome = "João";

  let viteAlt = "Vite Logo";

  return (
    <>
      {/* {Área imperativa} */}

      <Header />

      <Section viteLogoProps={viteLogo} viteAltProps={viteAlt}/>

      <Footer />

      
    </>
  );
}
