
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Jobs from './components/Jobs';

function App() {
  return (
    <div>
        <BrowserRouter>
        <MyNavbar/>
        <Routes>
        <Route element={<Jobs/>} path="/Jobs" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
