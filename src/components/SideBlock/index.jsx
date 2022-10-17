import { Paper, Typography } from '@mui/material';
import React from 'react';

import styles from './SideBlock.module.scss';

const SideBlock = ({ title, children }) => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography variant="h6" className={styles.title}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default SideBlock;
