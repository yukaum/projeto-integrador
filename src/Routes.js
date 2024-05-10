import { Routes, Route } from 'react-router-dom';
import StoragePage from './pages/storage/storage';
import PurchasePage from './pages/purchase/purchase';
import ExitPage from './pages/exit/exit';
import RegisterPage from './pages/register/register';

export const App = () => {

  return (
    <Routes>
      <Route exact path='/' Component={StoragePage} />
      <Route exact path='/compras' Component={PurchasePage} />
      <Route exact path='/saida' Component={ExitPage} />
      <Route exact path='/cadastro' Component={RegisterPage} />
    </Routes>
  );
};
