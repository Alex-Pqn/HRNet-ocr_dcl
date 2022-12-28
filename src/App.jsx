import './style/style.scss';

import { Routes, Route, Navigate } from 'react-router-dom';

import DefaultHeader from './components/Default/DefaultHeader/DefaultHeader';
import DefaultFooter from './components/Default/DefaultFooter/DefaultFooter';

import EmployeeList from './pages/Employee/EmployeeList/EmployeeList';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <div className="app">
      <DefaultHeader />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" />} />
            <Route path="list" element={<EmployeeList />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </main>
      <DefaultFooter />
    </div>
  );
}

export default App;
