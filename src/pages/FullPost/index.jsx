import React from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../axios';
import { Post } from '../../components';

const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((post) => {
        setData(post.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Error from getting post');
      });
  }, [id]);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }

  return (
    <>
      <Post
        isFullPost
        key={data._id}
        _id={data._id}
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        tags={['react', 'redux', 'ts']}
        viewsCount={data.viewsCount}
        title={data.title}
        createdAt={data.createdAt}
        user={data.user}
      >
        {data.text}
      </Post>
    </>
  );
};

export default FullPost;
