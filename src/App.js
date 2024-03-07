import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import HomeWithDescription  from './Components/HomeWithDescription';
import Testimonials  from './Components/Testimonials';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <HomeWithDescription/>
      <Testimonials/>
      <Footer/>
    </div>

  );
}

export default App;
