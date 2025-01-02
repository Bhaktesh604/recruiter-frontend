import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home';
import PageTitle from './components/pagetitle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <PageTitle title="Home" />
              <Home />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
