
import './App.scss';
import { About, Work, Testimonial, Footer, Header, Skills } from './container/index';
import {Navbar} from './components/index';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
