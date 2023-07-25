import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './pages/layout/layout';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/:page' element={<Home/>}/>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
