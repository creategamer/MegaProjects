// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';
// // import { BlogStart, BlogSuccess } from '../redux/blogSlice';
// import {MusicStart,MusicSuccess} from '../redux/musicSlice'
// import styled from 'styled-components';
// import  axios  from 'axios';


// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background-color:${({theme})=>theme.bgLighter};
// `;

// const Content = styled.div`
// background-color:${({theme})=>theme.bgLighter};
//   border-radius: 10px;
//   box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
//   padding: 40px;
//   max-width: 800px;
//   width: 100%;
// `;

// const VideoWrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   border-radius: 10px;
//   margin-bottom: 30px;
// `;

// const ImageFrame = styled.img`
//   width: 100%;
//   height: auto;
//   max-width: 100%; /* Ensure image doesn't exceed its container */
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const StyledAudioPlayer = styled.audio`
//   width: 100%;
//   margin-top: 20px;
// `;

// const Title = styled.h1`
//   font-size: 32px;
//   font-weight: bold;
//   margin-bottom: 20px;
//   color:${({theme})=>theme.text};
// `;

// const Hr = styled.hr`
//   border: none;
//   border-top: 1px solid #eaeaea;
//   margin: 20px 0;
// `;

// const Desc = styled.p`
//   font-size: 20px;
//   color: #666666;
//   margin-bottom: 20px;
// `;

// const BriefDesc = styled.p`
//   font-size: 18px;
//   color:${({theme})=>theme.text};
//   margin-bottom: 20px;
// `;



// const MusicPart = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const { currentMusic, loading } = useSelector((state) => state.music);
//   const dispatch = useDispatch();
//   const path = useLocation().pathname.split("/")[2];

//   useEffect(() => {
//       dispatch(MusicStart());
//       const fetchData = async () => {
//           try {
//               const musicRes = await axios.get(`/api/music/find/${path}`);
//               console.log("this is music response in the card");
//               console.log(musicRes.data);
//               dispatch(MusicSuccess(musicRes.data));
//           } catch (err) {
//               console.log("error on the music find by id");
//           }
//       };
//       fetchData();
//   }, [path, dispatch]);

//   console.log(currentMusic);

//   // Render loading indicator if data is still loading
//   if (loading || !currentMusic) {
//       return <div>Loading...</div>;
//   }

//   // Once currentMusic is loaded, render the content
//   return (
//       <>
//           <Container>
//               <Content>
//                   <VideoWrapper>
//                       <ImageFrame src={currentMusic.imgUrl} alt="Music Cover" />
//                       <StyledAudioPlayer controls>
//                           <source src={currentMusic.audioUrl} type="audio/mpeg" />
//                           Your browser does not support the audio element.
//                       </StyledAudioPlayer>
//                   </VideoWrapper>
//                   <Title></Title>
//                   <Title>Singer:{currentMusic.singer}</Title>
//                   <Hr />
//                   <Desc>Song Name:{currentMusic.songsname}</Desc>
//                   <Hr />
//                   <BriefDesc>Desc:{currentMusic.desc}</BriefDesc>
//               </Content>
//           </Container>
//       </>
//   );
// };

// export default MusicPart;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MusicStart, MusicSuccess } from '../redux/musicSlice';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Set minimum height to occupy full viewport height */
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 800px;
  width: 100%;
  overflow-y: auto; /* Enable vertical scrolling if content exceeds viewport height */
  max-height: 80vh; /* Set max height to limit content height */
`;

const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const ImageFrame = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const StyledAudioPlayer = styled.audio`
  width: 100%;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  border: none;
  border-top: 1px solid #eaeaea;
  margin: 20px 0;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #666666;
  margin-bottom: 20px;
`;

const BriefDesc = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
`;

const MusicPart = () => {
  const { currentMusic, loading } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];

  useEffect(() => {
    dispatch(MusicStart());
    const fetchData = async () => {
      try {
        const musicRes = await axios.get(`/api/music/find/${path}`);
        dispatch(MusicSuccess(musicRes.data));
      } catch (err) {
        console.log("error on the music find by id");
      }
    };
    fetchData();
  }, [path, dispatch]);

  // Render loading indicator if data is still loading
  if (loading || !currentMusic) {
    return <div>Loading...</div>;
  }

  // Once currentMusic is loaded, render the content
  return (
    <>
      <Container>
        <Content>
          <VideoWrapper>
            <ImageFrame src={currentMusic.imgUrl} alt="Music Cover" />
            <StyledAudioPlayer controls>
              <source src={currentMusic.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </StyledAudioPlayer>
          </VideoWrapper>
          <Title>Singer: {currentMusic.singer}</Title>
          <Hr />
          <Desc>Song Name: {currentMusic.songsname}</Desc>
          <Hr />
          <BriefDesc>Desc: {currentMusic.desc}</BriefDesc>
        </Content>
      </Container>
    </>
  );
};

export default MusicPart;
