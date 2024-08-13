import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import LikeCard from './LikeCard';
import styled from 'styled-components';
import SaveCard from './saveCard';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Add gap between cards */
`;

const Card = styled.div`

`;

const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  color:white;
  margin-bottom: 20px; /* Add space between title and cards */
`;

const History = () => {
  const [videos, setVideos] = useState([]);
  const { currentUser } = useSelector((state) => state.user);


  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`/api/vidoes/videos/saved/${currentUser._id}`);
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const [saving, setsaving] = useState([]);
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`/api/vidoes/videos/saving/${currentUser._id}`);
        console.log("saved");
        console.log(response.data);
        setsaving(response.data);
      } catch (error) {
        console.error('Error fetching saved videos:', error);
      }
    };
    fetchVideos();
  }, []);

  
  // console.log(saved);


  return (
    <>
      <Title>Liked Video</Title>
      <CardContainer>
        {videos.map((likeVideo) => (
          <Card key={likeVideo._id}>
            <LikeCard Likevideo={likeVideo} />
          </Card>
        ))}
      </CardContainer>
      <Title>Saved Video</Title>
      <CardContainer>
        {saving.map((savingVideo) => (
          <Card key={savingVideo._id}>
            <SaveCard savingVideo={savingVideo} />
          </Card>
        ))}
      </CardContainer> 
    </>
  );
};

export default History;
