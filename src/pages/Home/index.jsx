import { Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post, TagsBlock } from '../../components';
import { fetchPosts, fetchTags } from '../../redux/api/postApi';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);

  const isPostsLoading = posts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0}>
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={4}>
        {/* Post grid */}
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((post, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading />
            ) : (
              <Post
                key={index}
                _id={post._id}
                imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
                tags={['react', 'redux', 'ts']}
                viewsCount={post.viewsCount}
                title={post.title}
                createdAt={post.createdAt}
                user={post.user}
              />
            ),
          )}
        </Grid>
        {/* Tags Grid */}
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
