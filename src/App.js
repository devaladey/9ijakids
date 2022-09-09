import './App.css';
import { Footer } from './components/footer/Footer';
import { Games } from './components/games/Games';
import { Hero } from './components/hero/Hero';
import { NavBar } from './components/nav/NavBar';
import { Subscribe } from './components/subscribe/Subscribe';
import { Banner } from './components/yellow-banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Hero />
      <Games />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
