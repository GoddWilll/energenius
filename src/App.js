import React from 'react';
import NavigationBar from './components/NavigationBar';
import SideMenu from './components/SideMenu';
import MainPage from './pages/MainPage';
import { Stack } from "@mui/material";
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
import ManagePortfolios from './pages/ManagePortfolios';
import ManageMeters from './pages/ManageMeters';
import ManageInvoices from './pages/ManageInvoices';
import ManageContracts from './pages/ManageContracts';
import Preferences from './pages/Preferences';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import LoginPage from './pages/LoginPage';
import RegisterNewAccount from './pages/RegisterNewAccount';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
      <BrowserRouter>
          <Stack direction="row">
              <Routes>
                <Route path="/" exact element={<MainPage/>}/>
                  <Route path="/main-page" exact element={<MainPage/>}/>
                  <Route path="/login" exact element={<LoginPage/>}/>
                  <Route path="/manage-portfolios" exact element={<ManagePortfolios/>}/>
                  <Route path="/manage-meters" exact element={<ManageMeters/>}/>
                  <Route path="/manage-invoices" exact element={<ManageInvoices/>}/>
                  <Route path="/manage-contracts" exact element={<ManageContracts/>}/>
                  <Route path="/preferences" exact element={<Preferences/>}/>
                  <Route path="/profile" exact element={<Profile/>}/>
                  <Route path="/notifications" exact element={<Notifications/>}/>
                  <Route path="/register-account" exact element={<RegisterNewAccount/>}/>
                  <Route path='/reset-passwd' exact element={<ResetPassword/>}/>
              </Routes>
          </Stack>
      </BrowserRouter>

  );
};

export default App