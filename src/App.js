
import './App.css';
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";
import Content from "./components/Content";
import RightSideBar from "./components/RightSideBar";



function App() {
  return (
    <>
        <Navbar />
        <main className="main-container">
        <LeftSideBar />
        <Content />
        <RightSideBar />
        </main>
    </>
  );
}

export default App;
