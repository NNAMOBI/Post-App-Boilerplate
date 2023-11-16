import Layout from 'Component/Body/Layout/Layout';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const App = ()=> {
  return (
     <Routes>
      <Route exact path="/" element={< Layout />}></Route>
     </Routes>

  );
}

export default App;
