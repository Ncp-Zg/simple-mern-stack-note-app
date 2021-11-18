
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import MyNotes from './screens/MyNotes/MyNotes';

function App() {
  return (
    <Router>
      <Header/>
      <main style={{minHeight:"93vh"}}>
        <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/mynotes" element={<MyNotes/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
