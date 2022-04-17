import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import TimeLine from './components/timeline/Timeline';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <TimeLine />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
