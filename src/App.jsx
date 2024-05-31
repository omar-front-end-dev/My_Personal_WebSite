import { Hero, Header, Main, Contact, Footer } from "./components/index"
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
        href="#up"
      >
        <button className="scroll2Top">
          <FaArrowUp />
        </button>
      </a>
    </div>
  );
}

export default App;
