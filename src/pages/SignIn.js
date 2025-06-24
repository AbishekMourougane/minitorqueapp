import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function SignIn() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/bg-cars.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // ✅ aligned to the left
        p: 4
      }}
    >
      <Card
        elevation={8}
        sx={{
          maxWidth: 400,
          width: '100%',
          borderRadius: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // translucent white
          backdropFilter: 'blur(5px)'                  // slight blur
        }}
      >
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: theme.palette.secondary.main, width: 64, height: 64 }}>
              <LockOutlinedIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5">Sign In</Typography>

            {error && (
              <Typography variant="body2" color="error" textAlign="center">
                {error}
              </Typography>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <Stack spacing={2}>
                <TextField
                  required fullWidth
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  required fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    )
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: '#fff',
                    '&:hover': { opacity: 0.9 }
                  }}
                >
                  Sign In
                </Button>

                <Typography variant="body2" textAlign="center">
                  Don’t have an account?{' '}
                  <Link component={RouterLink} to="/signup" underline="hover">
                    Sign Up
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
