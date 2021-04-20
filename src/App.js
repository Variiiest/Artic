import './index.css'
import './App.css';
import Example from './components/Header';
import Services from './components/Services';
import Carousel from './components/Carousel';
import Team from './components/Team';
import Stats from './components/Case';
import Featurs from './components/Featurs';
import BlogComp from './components/BlogComp';
import FAQ from './components/FAQ';
import Radio from './components/Radio';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
    <Example/>
    <Services/>
    <Featurs/>
    <Stats/>
    <Carousel/>
    <Team/>
 
  
   <BlogComp/>
   <FAQ/>
   <Radio/>
   <Menu/>
        </div>
  );
}

export default App;
