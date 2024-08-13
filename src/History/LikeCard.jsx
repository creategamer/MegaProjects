import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { FaRegCircleUser } from 'react-icons/fa6';

const Container = styled.div`
  width: ${(props) => (props.type !== 'sm' ? '360px' : '100%')};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ChangeImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;

const Texts = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const LikeCard = ({ Likevideo }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(`/api/users/find/${Likevideo.userId}`);
        setChannel(res.data);
      } catch (error) {
        console.error('Error fetching channel:', error);
      }
    };
    fetchChannel();
  }, [Likevideo.userId]);

  return (
    <Link to={`/video/${Likevideo._id}`} style={{ textDecoration: 'none' }}>
      <Container>
        <Image src={Likevideo.imgUrl} />
        <Details>
          {channel.img ? (
            <ChangeImage src={channel.img} />
          ) : (
            <FaRegCircleUser size={36} /> // Adjust icon size based on type
          )}
          <Texts>
            <Title>{Likevideo.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{Likevideo.views} views * {format(Likevideo.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default LikeCard;
