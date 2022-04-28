
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';

import NotFound from './pages/NorFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import CheckOut from './pages/CheckOut/ChackOut';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import PageTitle from './pages/PageTitle/PageTitle';
import Map from './pages/Map/Map';
import AddService from './pages/AddService/AddService';
import ManageService from './pages/ManageService/ManageService';
import Order from './pages/Order/Order';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
        <Route path='/home' element={
          <Home></Home>
        }></Route>


        <Route path='/about' element={<PageTitle title={'about'}>
          <About> </About>
        </PageTitle>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/map' element={<Map></Map>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>} ></Route>

        <Route path='/addservice' element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>} ></Route>

        <Route path='/manageservice' element={<RequireAuth>
          <ManageService></ManageService>
        </RequireAuth>} ></Route>

        <Route path='/orders' element={<RequireAuth>
          <Order></Order>
        </RequireAuth>} ></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
