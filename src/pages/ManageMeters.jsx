import React from 'react'
import SideMenu from '../components/SideMenu';
import {Stack, Box, Grid} from '@mui/material';
import logo from '../resources/logo.png';
import AccountMenu from '../components/AccountMenu';
import TopMenu from '../components/TopMenu';
import TempList from '../components/TempList';

const ManageMeters = () => {
  const pageAddress = "/manage-meters";
  const pageName = "Manage meters";
  return (
    <Stack direction='row' sx={{width:"100%"}}>
      <SideMenu/>
      <Stack sx={{display:'flex', width:"100%"}}>
        <TopMenu pageAddress={pageAddress} pageName={pageName}/>
        <TempList/>
      </Stack>
    </Stack>
  );
}

export default ManageMeters