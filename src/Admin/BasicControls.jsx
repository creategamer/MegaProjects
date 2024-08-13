import React, { useEffect, useState } from 'react';
import AdminVideocard from './AdminVideocard';
import { styled } from 'styled-components';
import axios from 'axios';
import AdminUsercard from './AdminUsercard';
import AdminBlogcard from './AdminBlogcard';
import AdminTweetcard from './AdminTweetcard';
import AdminMusiccard from './AdminMusiccard';

// Styled components for the container and wrapper
const Container = styled.div`
background-color:${({theme})=>theme.bgLighter};
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Title = styled.h1`
  color:${({theme})=>theme.text};
  margin-bottom: 20px;
`;

const BasicControls = () => {
  const [allvideos, setAllVideos] = useState([]);
  const [allBlogs, setallBlogs] = useState([]);
  const [allTweets, setallTweets] = useState([]);
  const [allMusics, setallMusics] = useState([]);
  

  useEffect(() => {
    axios
      .get('/api/admin/videos')
      .then(res => {
        setAllVideos(res.data);
        console.log('set data all videos response');
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('/api/admin/blogs')
      .then(res => {
        setallBlogs(res.data);
        console.log('set data all Blogs response');
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('/api/users/users-with-tweets')
      .then(res => {
        setallTweets(res.data);
        console.log('set data all tweets response');
        console.log(res.data);
      //   const tweetDescs = tweetsWithDesc.map(tweet => tweet.desc);
      //   console.log("tweet Dosc");
      // console.log(tweetDescs);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  useEffect(() => {
    axios
      .get('/api/admin/musics')
      .then(res => {
        setallMusics(res.data)
        console.log('set data all musics response');
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Title>User Details</Title>
      <AdminUsercard />
      <Title>Videos Details</Title>
      <Wrapper>
        {allvideos.map(video => (
          <AdminVideocard key={video._id} video={video} />
        ))}
      </Wrapper>
      <Title>Blogs Details</Title>
      <Wrapper>
        {allBlogs.map((Blogs) => (
          <AdminBlogcard key={Blogs._id} Blogs={Blogs} />
        ))}
      </Wrapper>
      <Title>Musics Details</Title>
      <Wrapper>
        {allMusics.map((Musics) => (
          <AdminMusiccard key={Musics._id} Musics={Musics} />
        ))}
      </Wrapper>
      {/* <Title>Tweets Details</Title> */}
      <AdminTweetcard />
    </Container>
  );
};

export default BasicControls;
