import './App.css';
import Navbar from '../src/components/Navbar.jsx';
import Menu from './components/Menu.jsx';
import Slides from  '../src/components/sub-component/Slides.tsx';
import Card from '../src/components/Card.jsx';
import Slide_sec from './components/sub-component/Slide_sec.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className='first_div'>
      <Menu />
      <Slides />
      </div>

      <div className='first_div'>
      <Menu />
      <Slide_sec />
      <Card />
      </div>  

    </>
  );
}

export default App;
