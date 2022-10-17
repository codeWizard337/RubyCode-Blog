import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { IconButton } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import { Skeleton, UserInfo } from '../../components';
import styles from './Post.module.scss';

const Post = ({
  isEditable,
  _id,
  imageUrl,
  title,
  isFullPost,
  tags,
  children,
  viewsCount,
  user,
  createdAt,
  isLoading,
}) => {
  const onClickRemove = () => {};

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton>
            <DeleteIcon color="secondary" onClick={onClickRemove} />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="post"
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
        />
      )}
      <div className={styles.wrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </h2>
          <ul className={styles.tags}>
            {tags.map((tagName) => (
              <li key={tagName}>#{tagName}</li>
            ))}
          </ul>
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
