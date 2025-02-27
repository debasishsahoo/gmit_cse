import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import MenuLink from "./components/MenuLink";
import Stats from "./components/Stats";
import "./App.css";
function App() {

const HeaderData={
  title:"Changing the World Through Coding",
  desc:"This is My Second Project on React"
}







  return (
    <>
      <div className="container">
        <Header headerProps={HeaderData}/>
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
