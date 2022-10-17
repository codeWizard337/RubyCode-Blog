import React from 'react';

import ErrorImage from '../../images/error404.jpg';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <div className={styles.image}>
      <img src={ErrorImage} alt="errorimage" />
    </div>
  );
};

export default Error;
