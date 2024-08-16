import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Divider from "./components/ui/Divider";

function App() {
  return (
    <div className="container bg-white border-2 border-borderLight dark:bg-darkBg dark:border-borderDark w-[90%] dark:text-darkText">
      <Header />
      <Divider />
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
