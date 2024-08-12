import Main from "./components/Main/Main";
import "./App.css";
import SectionTrack from "./components/SectionTrack/SectionTrack";
import SectionClipboard from "./components/SectionClipboard/SectionClipboard";
import SectionSupercharge from "./components/SectionSupercharge/SectionSupercharge";
import SecondClipboard from "./components/SecondClipboard/SecondClipboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <div className="bg-img"></div>
        <Main />  
        <SectionTrack />
        <SectionClipboard />
        <SectionSupercharge />
        <SecondClipboard />
        <Footer />
    </div>
  );
}

export default App;
