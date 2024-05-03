import { Routes, Route } from 'react-router-dom';
import Storage from './pages/storage/storage';
import Purchase from './pages/purchase/purchase';

export const App = () => {

  return (
    <Routes>
      <Route exact path='/' Component={Storage} />
      <Route exact path='/compras' Component={Purchase} />
    </Routes>
  );
};
