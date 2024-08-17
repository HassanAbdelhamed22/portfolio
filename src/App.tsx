import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Divider from "./components/ui/Divider";

function App() {
  return (
    <div className="container bg-white border-2 border-borderLight dark:bg-darkBg dark:border-borderDark w-[85%] dark:text-darkText px-8 md:px-16">
      <Header />
      <Hero />
      <Divider />
      <Main />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;
