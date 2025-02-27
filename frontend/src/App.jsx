import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import MenuLink from "./components/MenuLink";
import Stats from "./components/Stats";
import "./App.css";
function App() {
  const HeaderData = {
    title: "Changing the World Through Coding",
    desc: "This is My Second Project on React",
  };

  const ContentData = {
    title: "Our Agency, our selves.",
    desc: "This is a Description of Content",
    imgUrl: "https://dummyimage.com/600x400/000/fff",
    altText: "Agency Image",
  };

  const ServicesData = [
    { title: "Photoshop", desc: "Expert photo editing and designing services." },
    { title: "Javascript", desc: "Building interactive and dynamic web applications." },
    { title: "Marketing", desc: "Strategic marketing solutions to boost your brand." },
    
  ];

  return (
    <>
      <div className="container">
        <Header headerProps={HeaderData} />
        <Content contentProps={ContentData} />
        <Services servicesProps={ServicesData}/>
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
