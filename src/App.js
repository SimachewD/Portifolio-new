import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="sticky top-0 md:w-1/5 "><Navbar /></div>
      <div className=" mt-10 md:w-4/5 ml-8 ">
        <div ><Home /></div>
        <div ><About /></div>
        <div ><Contact /></div>
      </div>
    </div>
  );
}

export default App;
