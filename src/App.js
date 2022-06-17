import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
        <Nav />
        <Hero />
        <Articles />
        <Contact />
    </div>
  );
}

export default App;
