import {React, useState} from 'react'
import {createTheme, Button, styled ,Typography, Stack, Card, Box, Grid,  TextField, ThemeProvider} from '@mui/material';
import logo from '../resources/logo.png';
import { Link } from "react-router-dom";
import axios from 'axios';

const RegisterNewAccount = () => {

  const [user, setUser]=useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      phoneno:"",
      address:"",
      city:"",
      country:"",
      postalCode:"",
      language:"",
      password:""
    }
  )

  const{firstName, lastName, email, phoneno, address, city, country, postalCode, language, password}=user;

  const onInputChange=(e)=>{
    setUser({
      ...user,[e.target.name]:e.target.value
    })
  }



  // Styling part

  const theme = createTheme({
    palette: {
      primary: {
        main: "#9bcc6c",
        contrastText: '#fff'
      }, 
      secondary: {
        main: "#000",
        contrastText: '#000000'
      }
    }
  });

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#9acd6c',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#9acd6c',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#9acd6c',
      },
    },
  });

  // code part
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh', margin:'auto' }}>
      <Grid width={'90%'}>
        <Card width={'100%'} sx={{height:"auto", boxShadow:'5px 5px 5px #9bcc6c'}}>
          <Stack alignItems='center' width={'100%'} sx={{width:'100%'}}>
            <img className='login-logo' src={logo} alt='logo' width={70} height={70}/>
            <Typography className='typo' variant="h4">Sign up</Typography>
            <Typography variant="h7" sx={{mt:1, color:'#262626'}}>Register an account</Typography>       
            <form> 
            <Box width='100%'>
              <Grid container spacing={0} direction='row' justifyContent='space-around' xs={12}>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} size='small' variant='outlined' label='first name' margin='normal' name='firstName' value={firstName} onChange={(e)=>onInputChange(e)}/>
                </Grid>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} size='small' variant='outlined' label='last name' margin='normal' name='lastName' value={lastName} onChange={(e)=>onInputChange(e)}/>
                </Grid> 
              </Grid>
            </Box>
            <Box width='100%'>
              <Grid container spacing={0} direction='row' justifyContent='space-evenly' xs={12}>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} type='email' size='small' variant='outlined' label='email' margin='normal' name='email' value={email} onChange={(e)=>onInputChange(e)}/>
                </Grid>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} size='small' variant='outlined' type='tel' label='phone number' margin='normal' name='phoneno' value={phoneno} onChange={(e)=>onInputChange(e)}/>
                </Grid> 
              </Grid>
            </Box>
            <Box width='100%'>
              <Grid container spacing={0} direction='row' justifyContent='space-evenly' xs={12}>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} size='small' variant='outlined' label='address' margin='normal'name='address' value={address} onChange={(e)=>onInputChange(e)}/>
                </Grid>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} size='small' variant='outlined' label='city' margin='normal' name='city' value={city} onChange={(e)=>onInputChange(e)}/>
                </Grid> 
              </Grid>
            </Box>
            <Box width='100%'>
              <Grid container spacing={0} direction='row' justifyContent='space-evenly' xs={12}>
                <Grid container spacing={0} direction='row' justifyContent='space-around' item xs={6} align='center'>
                  <Grid item xs={5} align='center'>
                    <CssTextField sx={{width:"95%"}} size='small' variant='outlined' label='country' margin='normal' name='country' value={country} onChange={(e)=>onInputChange(e)}/>
                  </Grid>
                  <Grid item xs={5} align='center'>
                    <CssTextField sx={{width:"95%"}}  size='small' variant='outlined' label='postal code' margin='normal' name='postalCode' value={postalCode} onChange={(e)=>onInputChange(e)}/>
                  </Grid>
                </Grid>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} size='small' variant='outlined' label='language' margin='normal' onChange={(e)=>onInputChange(e)}/>
                </Grid> 
              </Grid>
            </Box>
            <Box width='100%'>
              <Grid container spacing={0} direction='row' justifyContent='space-evenly' xs={12}>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} size='small' variant='outlined' type='password' label='password' margin='normal' name='password' value={password} onChange={(e)=>onInputChange(e)}/>
                </Grid>
                <Grid item xs={6} align='center'>
                  <CssTextField sx={{width:"90%"}} size='small' variant='outlined' type='password' label='confirm password' margin='normal'/>
                </Grid> 
              </Grid>
            </Box>
            <button>
              Sign up
            </button>
             
            <ThemeProvider theme={theme}>
              <Link to='/registration-success' className='link-4' style={{display: 'inline-block', mt:2, width:'80%', mb:5}}>
                
                <Button variant='contained' color='primary' sx={{mt:2, width:'100%', mb:2}}>Sign up</Button>
              </Link>
            </ThemeProvider>
            <Box sx={{mb:2}}>
              <Link className='link-2' to='/login'>
                <Typography variant="h7">Already registered ? Click here to log in.</Typography>
              </Link>
            </Box>
            </form>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  )
}

export default RegisterNewAccount

/**
 * <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              sx={{flexGrow:1}}>
              <Grid item xs={'auto'}>
                <CssTextField variant='outlined' label='firstname' margin='normal'/>
              </Grid>
              <Grid item xs={'auto'}>
                <CssTextField variant='outlined' label='lastname' margin='normal'/>
              </Grid>             
            </Grid>   
 */