
import './App.css'
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import CookingAppliances from './components/CookingAppliances';
import CarbonProject from './components/CarbonProject';
import Global from './components/Global';
import CarbonProjectMapOnly from './components/CarbonProjectMapOnly';
import Development from './components/Development';
// import CookingSolutions from './components/CookingSolutions';
import TalkToUs from './components/TalkToUs';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CookingAppliances />
      <CarbonProject/>
      <Global/>
      <CarbonProjectMapOnly />
      <Development />
      {/* <CookingSolutions /> */}
      <TalkToUs />
      <Footer />
      
      
    </div>
  );
}

export default App;
