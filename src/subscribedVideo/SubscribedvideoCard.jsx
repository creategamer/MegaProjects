import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import {format} from 'timeago.js';
import { useSelector } from 'react-redux';
import { FaRegCircleUser } from "react-icons/fa6";



const Container=styled.div`
  width:${(props)=>props.type!=="sm" && "360px"};
  margin-bottom:${(props)=>props.type==="sm" ? "10px" : "45px"};
  cursor:pointer;
  display:${(props)=>props.type==="sm" && "flex"};
  gap:10px;
  padding:7px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
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

const SubscribedvideoCard = ({subvideo}) => {
    const [channel,setChannel]=useState({})

    // console.log("this is video card detail to know");
    // console.log(video);
    
  
    useEffect(()=>{    
      const fetchChannel=async ()=>{
        const res=await axios.get(`/api/users/find/${subvideo.userId}`);
        setChannel(res.data);
      };
      fetchChannel();
    },[subvideo.userId])
  return (
    <>
     <Link to={`/video/${subvideo._id}`} style={{textDecoration:"none"}}>
      <Container>
        <Image 
          src={subvideo.imgUrl}
        />
        <Details>
          {subvideo.imgUrl ? (
            <ChangeImage
              src={subvideo.imgUrl}
              />
              ) : (
              <FaRegCircleUser  /> // Adjust icon size based on type
          )}


          <Texts>
            <Title>{subvideo.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{subvideo.views} views * {format(subvideo.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link> 
    </>
  )
}

export default SubscribedvideoCard
