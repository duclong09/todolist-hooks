import { useEffect, useState } from "react";
import { DataProvider } from "./Components/Data";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [showGotoTop, setShowGotoTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowGotoTop(window.pageYOffset >= 150);
    };
    window.addEventListener("scroll", handleScroll);
    //clern
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DataProvider>
      <div className="App">
        <h1>Todo List</h1>
        <Form />

        <List />

        <Footer />

        {showGotoTop && (<button id="top" onClick={scrollToTop}>Go top top</button>)}
      </div>
    </DataProvider>
  );
}

export default App;
