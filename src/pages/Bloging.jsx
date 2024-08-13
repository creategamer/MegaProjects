import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { BlogStart, BlogSuccess } from '../redux/blogSlice';

const Container = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid gray;
`;

const Content = styled.div`
  flex: 1;
  border: 1px solid gray;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 24px;
  padding:15px;
  font-weight: 500;
  margin: 20px 0 10px;
  color: ${({ theme }) => theme.text};
`;

const Desc = styled.p`
  font-size: 22px;
  
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 10px;
  color: ${({ theme }) => theme.text};
`;

const BriefDesc = styled.p`
  font-size: 18px;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom:20px;
  text-align: justify; /* Corrected property name */
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const ImageFrame = styled.img`
  max-height: 720px;
  width: 100%;
  height: auto; /* Ensures the image maintains its aspect ratio */
  object-fit: cover; /* Maintains the aspect ratio while covering the entire container */
`;

const Bloging = () => {
  const { currentBlog, loading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];

  useEffect(() => {
    dispatch(BlogStart());
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/api/blog/find/${path}`);
        dispatch(BlogSuccess(videoRes.data));
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };
    fetchData();
  }, [path, dispatch]);

  if (loading || !currentBlog) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <ImageFrame src={currentBlog.imgUrl} />
        </VideoWrapper>
        <Title>Title:{currentBlog.title}</Title>
        <Hr />
        <Desc>Desc:{currentBlog.desc}</Desc>
        <Hr />
        <BriefDesc>{currentBlog.briefdesc}</BriefDesc>
      </Content>
    </Container>
  );
};

export default Bloging;
