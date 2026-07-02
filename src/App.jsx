import {Toaster} from "react-hot-toast";
import Page from "./components/Page";
import Gallery from "./components/sections/gallery/Gallery";
import Header from "./components/sections/header/Header";
import Navigation from "./components/sections/header/Navigation";
import Hero from "./components/sections/header/hero/Hero";
import Services from "./components/sections/services/Services";
import About from "./components/sections/about/About";
import ContactFormContainer from "./components/sections/contact/ContactFormContainer";
import ContactModal from "./components/ContactModal";


function App() {  

  return (
    <Page >
      <Header >
        <Navigation />
        <Hero />
      </Header>
      <Gallery />
      <Services />
      <About />
      <ContactFormContainer />
      <ContactModal />
      <Toaster />
    </Page>
  )
}

export default App;
