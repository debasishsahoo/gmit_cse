import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Services from "./components/Services";
import Gallary from "./components/Gallary";
import MenuLink from "./components/MenuLink";
import Stats from "./components/Stats";
import "./App.css";
function App() {
  return (
    <>
    
      <Header />
      <Content/>
      <Services/>
      <Stats/>
      <Gallary/>
      <MenuLink/>
      <Footer/>
    </>
  );
}

export default App;
