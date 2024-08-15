import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Divider from "./components/ui/Divider";

function App() {
  return (
    <div className="container bg-white border-2 border-[#f9f9f9] dark:bg-[#18181b] dark:border-[#3f3f4666] w-[90%] dark:text-white">
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
