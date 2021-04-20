import './index.css'
import './App.css';
import Example from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Carousel from './components/Carousel';
import Team from './components/Team';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Featurs from './components/Featurs';
import BlogComp from './components/BlogComp';
import FAQ from './components/FAQ';
import Radio from './components/Radio';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
    <Example/>
    <Featurs/>
    <Stats/>
    <Services/>
    <Testimonials/>
    <Carousel/>
    <Team/>
  
    <Pricing/>
  
   <BlogComp/>
   <FAQ/>
   <Radio/>
   <Menu/>
        </div>
  );
}

export default App;
