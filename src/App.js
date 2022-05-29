import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import NavBar from './Pages/Shared/NavBar';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/User/AddReview';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin';
import MyOrders from './Pages/Dashboard/User/MyOrders';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
          <Route path='myorders' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
          <Route path='addreview' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
          <Route path='users' element={<RequireAuth><MakeAdmin></MakeAdmin></RequireAuth>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
