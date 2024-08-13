import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from './MusicCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MainTitle = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  display: flex;
  width: 100%;
`;

const MusicComponents = () => {
  const [musics, setMusic] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await axios.get('/api/music/random');
        setMusic(res.data); // Update state with fetched data
      } catch (error) {
        console.log("Error fetching music data:", error);
      }
    };

    fetchMusic();
  }, []);

  return (
    <>
      <Container>
        <MainTitle>
          <Title></Title>
        </MainTitle>
        <Card>
          {musics.map((music) => (
            <MusicCard
              key={music._id}
              music={music}
            />
          ))}
        </Card>
      </Container>
    </>
  );
}

export default MusicComponents;
