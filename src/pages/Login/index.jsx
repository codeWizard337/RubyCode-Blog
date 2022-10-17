import { Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { fetchAuth } from '../../redux/api/authApi';
import { selectIsAuth } from '../../redux/slices/auth';
import styles from './Login.module.scss';

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Failed to login');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography className={styles.title} variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email', { required: 'Type your email' })}
          className={styles.field}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          label="Email"
          fullWidth
        />
        <TextField
          type="password"
          {...register('password', { required: 'Type your password' })}
          className={styles.field}
          error={Boolean(errors.password?.message)}
          label="Password"
          helperText={errors.password?.message}
          fullWidth
        />
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
