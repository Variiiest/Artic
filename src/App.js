import './index.css'
import './App.css';
import Example from './components/Header';
import Services from './components/Services';
import Stats from './components/Case';
import Featurs from './components/Featurs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Example/>
    <Services/>
    <Featurs/>
    <Stats/>
    
   <FAQ/>
   <Footer/>
        </div>
  );
}

export default App;
