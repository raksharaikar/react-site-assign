import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Header/NavBar/NavBar';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import GetTouchForm from './components/GetTouchForm/GetTouchForm';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Banner/>
      <About/>
      <Testimonials/>
      <GetTouchForm/>
      <Footer/>


      <Switch>
        
         </Switch>
    </Router>
    </>
  );
}

export default App;
