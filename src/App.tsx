import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Divider from "./components/ui/Divider";

import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import ToTopButton from "./components/ui/ToTopButton";
import { useEffect, useState } from "react";

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="container bg-lightBg border-[1px] border-borderLight dark:bg-darkBg dark:border-borderDark w-[85%] dark:text-darkText px-8 md:px-16 max-w-screen-2xl h-auto"
      id="up"
    >
      <Header />
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Education />
      <Divider />
      <Main />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
      <ToTopButton showScrollBtn={showScrollBtn} />
    </div>
  );
}

export default App;
