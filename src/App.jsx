import Lista from "./components/Lista";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {

  return (
    <>
      {/* {Área imperativa} */}

      <Lista/>

      <Outlet/>

      <Footer />

    </>
  );
}
