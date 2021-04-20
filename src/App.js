import './index.css'
import './App.css';
import Example from './components/Header';
import Services from './components/Services';
import Team from './components/Team';
import Stats from './components/Case';
import Featurs from './components/Featurs';
import FAQ from './components/FAQ';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
    <Example/>
    <Services/>
    <Featurs/>
    <Stats/>
    <Team/>
 
   <FAQ/>
   <Menu/>
        </div>
  );
}

export default App;
