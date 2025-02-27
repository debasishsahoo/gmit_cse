import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import MenuLink from "./components/MenuLink";
import Stats from "./components/Stats";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Content />
        <Services />
        <Stats />
        <hr />
        <div className="row column">
          <h3>Our Recent Work</h3>
        </div>
        <Gallery />
        <hr />
        <MenuLink />
        <Footer />
      </div>
    </>
  );
}

export default App;
