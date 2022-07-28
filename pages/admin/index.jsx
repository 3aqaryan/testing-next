import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        New Mobile
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Admin() {
    // const cookies = new Cookies();
    const [user, setUser] = useState('')
    // let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sendData = {
      login: data.get('login'),
      password: data.get('password'),
    }
    console.log(sendData)
    // axios.post("http://localhost/newmobile/admin/login.php", sendData)
    // .then((response) =>{
    //   console.log(response.data)
    //     if(response.data[0].status === 'invalid'){
    //         setUser('Սխալ մուտքանուն կամ գաղտնաբառ')
    //     }
    //     else if(response.data[0].status === 'invalidEmpty'){
    //         cookies.remove('token')
    //         cookies.remove('user')
    //         setUser('Դաշտերը լրացնել ամբողջությամբ')
    //     }
    //     else{
    //         setUser('Հաջող մուտք')
    //         cookies.set('token', response.data[0].token, { path: '/' });
    //         cookies.set('user', response.data[0].user, { path: '/' });
    //         setTimeout(() => {
    //             navigate(`/dashboard`);
    //         },2500)
    //     }
    // })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <span style={user === "Սխալ մուտքանուն կամ գաղտնաբառ" || user === 'Դաշտերը լրացնել ամբողջությամբ' ? {color : 'red', fontSize : 12} : {color : 'green', fontSize : 12}}>{user}</span>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}