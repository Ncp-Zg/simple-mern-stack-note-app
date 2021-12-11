
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import AddNote from './screens/AddNote/AddNote';

function App() {
  return (
    <Router>
      <Header/>
      <main style={{minHeight:"93vh"}}>
        <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/mynotes" element={<MyNotes/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/addnote" element={<AddNote/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
