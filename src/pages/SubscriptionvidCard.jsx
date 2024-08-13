import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {format} from 'timeago.js';
import { FaRegCircleUser } from "react-icons/fa6";



const Container=styled.div`
  width:${(props)=>props.type!=="sm" && "360px"};
  margin-bottom:${(props)=>props.type==="sm" ? "10px" : "45px"};
  cursor:pointer;
  display:${(props)=>props.type==="sm" && "flex"};
  gap:10px;
  // border:3px solid black;
  padding:10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
`;


const Image=styled.img`
  width:100%;
  height:${(props)=>props.type==="sm" ? "120px" : "202px"};
  background-color:#999;
  flex:1;
`;

const Details=styled.div`
  display:flex;
  margin-top:${(props)=>props.type !=="sm" && "16px"};
  gap:12px;
`;

const ChangeImage=styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background-color:#999;
  display:${(props)=>props.type==="sm" && "none"};
`;

const Texts=styled.div``;
const Title=styled.h1`
  font-size:16px;
  font-weight:500;
  color:${({theme})=>theme.text}
`;
const ChannelName=styled.h2`
  font-size:14px;
  color:${({theme})=>theme.textSoft};
  margin:9px 0px;

`;
const Info=styled.div`
  font-size:14px;
  color:${({theme})=>theme.textSoft}
`;



const SubscriptionvidCard = ({userVideo}) => {

    const [channel,setChannel]=useState({})

    // console.log("this is video card detail to know");
    // console.log(video);
  
    useEffect(()=>{
      const fetchChannel=async ()=>{
        const res=await axios.get(`/api/users/find/${userVideo.userId}`);
        setChannel(res.data);
      };
      fetchChannel();
    },[userVideo.userId])

  return (
    <>
     <Link to={`/video/${userVideo._id}`} style={{textDecoration:"none"}}>
      <Container>
        <Image 
          src={userVideo.imgUrl}
        />

        <Details>
          
          {channel.img ? (
            <ChangeImage 
            src={channel.img} 
          />
              ) : (
              <FaRegCircleUser  /> // Adjust icon size based on type
          )}
          <Texts>
            <Title>{userVideo.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{userVideo.views} views * {format(userVideo.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  
    </>
  )
}

export default SubscriptionvidCard
