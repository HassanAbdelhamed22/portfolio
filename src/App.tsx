import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Divider from "./components/ui/Divider";

import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import ToTopButton from "./components/ui/ToTopButton";

function App() {
  return (
    <div className="container bg-lightBg border-[1px] border-borderLight dark:bg-darkBg dark:border-borderDark w-[85%] dark:text-darkText px-8 md:px-16 max-w-screen-2xl h-auto">
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
      <ToTopButton />
    </div>
  );
}

export default App;
