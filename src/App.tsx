import React, { Suspense, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

// Dynamically import components
const Header = React.lazy(() => import("./components/header/Header"));
const Hero = React.lazy(() => import("./components/hero/Hero"));
const Main = React.lazy(() => import("./components/main/Main"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const Divider = React.lazy(() => import("./components/ui/Divider"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Education = React.lazy(() => import("./components/education/Education"));
const ToTopButton = React.lazy(() => import("./components/ui/ToTopButton"));

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);

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
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900">
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#4A90E2"
              ariaLabel="oval-loading"
            />
          </div>
        }
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
      </Suspense>
    </div>
  );
}

export default App;
