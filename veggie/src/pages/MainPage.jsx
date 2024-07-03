import Home from "./Home";
import Menu from "./Menu";
import Specials from "./Specials";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

export default function MainPage() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="specials">
        <Specials />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
