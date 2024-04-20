import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div>
      {/*
    Header
    Body
      Sidebar
        MenuItems
      MainContainer
        ButtonsList
        VideoContainer
          VideoCard
    */}
      <Header />
      <Body />
    </div>
  );
}

export default App;
