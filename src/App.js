
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/aboutPage/aboutPage';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainPage from './components/mainpage/mainpage';
import ProfilePage from './components/profilePage/profilePage';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route  path='/' Component={MainPage}  />
        <Route  path='/profile' Component={ProfilePage}  />
        <Route  path='/about' Component={AboutPage}  />


      </Routes>

      {/* <MainPage/> */}



      <Footer/>
    </div>
  );
}

export default App;
