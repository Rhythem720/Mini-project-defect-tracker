import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './Base';
import UserViewDetails from './User/UserViewDetails';
import AddDefect from './User/AddDefect';
import AdminViewDetails from './Admin/AdminViewDetails';
import Login from './Admin/Login';
import AuthenticationService from './service/AuthenticationService';
import Register from './Admin/Register';

function App() {
  const login=(username)=>{
    AuthenticationService.login(username)
  }
  const logout=()=>{
    AuthenticationService.logout()
  }
  const isLoggedIn=()=>{
    AuthenticationService.isLoggedIn()
  }
  return (
    <div >
      <Base>
      <BrowserRouter>
        <Routes>
          <Route path="userViewDetails" element={<UserViewDetails isLoggedIn={isLoggedIn}/>}></Route>
          <Route path="AddDefect" element={<AddDefect />}></Route>
          <Route path="Login" element={<Login login={login} />}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="AdminViewDetails" element={<AdminViewDetails />}></Route>
        </Routes>
      </BrowserRouter>   
      </Base>
    </div>
  );
}

export default App;
