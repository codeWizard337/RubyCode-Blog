import { Avatar, Button, Paper, TextField, Typography } from '@mui/material';

import styles from './Register.module.scss';

const Register = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography className={styles.title} variant="h5">
        Sign In
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className={styles.field} label="Full name" fullWidth />
      <TextField className={styles.field} label="Email" fullWidth />
      <TextField className={styles.field} label="Password" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Register
      </Button>
    </Paper>
  );
};

export default Register;
