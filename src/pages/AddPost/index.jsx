import { Button, Link, Paper, TextField } from '@mui/material';
import 'easymde/dist/easymde.min.css';
import React from 'react';
import SimpleMDE from 'react-simplemde-editor';

import styles from './AddPost.module.scss';

const AddPost = () => {
  const [value, setValue] = React.useState('');
  const imageUrl = '';
  const handleChangeFile = () => {};
  const onClickRemoveImage = () => {};

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      status: false,
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Text here...',
      autosave: {
        enable: true,
        delay: 1000,
      },
    }),
    [],
  );

  return (
    <Paper style={{ padding: 30 }}>
      <Button size="large" variant="outlined">
        Download preview
      </Button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <>
          <Button
            variant="contained"
            color="error"
            onClick={onClickRemoveImage}
          >
            Delete
          </Button>
          <img className={styles.image} src={imageUrl} alt="Upload" />
        </>
      )}
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Post title..."
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Tags..."
        fullWidth
      />
      <SimpleMDE
        className={styles.editor}
        value={value}
        onChange={onChange}
        options={options}
      />
      <div className={styles.buttons}>
        <Button size="large" variant="contained">
          Post
        </Button>
        <Link to="/">
          <Button size="large">Cancel</Button>
        </Link>
      </div>
    </Paper>
  );
};

export default AddPost;
