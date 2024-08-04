import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] "></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-700 to-black opacity-50 rounded"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Header />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
