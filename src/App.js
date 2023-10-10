import logo from './logo.svg';
import './App.css';
import NavBar from './pureComponents/NavBar';
import Footer from './pureComponents/Footer';
import Me from './components/Me';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <>
      <NavBar/>
      <Me/>
      <Hobbies/>
      <Footer/>
    </>
  );
}

export default App;
