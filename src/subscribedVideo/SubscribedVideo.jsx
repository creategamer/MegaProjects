import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SubscribedvideoCard from './SubscribedvideoCard';
import { useNavigate } from 'react-router-dom';

const Container=styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;

      @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically on smaller screens */
        align-items: center; /* Center items vertically */
      }
`;

const SubscribedVideo = () => {
  
  const {currentUser}=useSelector((state)=>state.user)
  console.log(currentUser._id);

    const navigate=useNavigate()  
    const [showAlert, setShowAlert] = useState(false);

    console.log("library part show it");
    
    
      if (currentUser) {
        // navigate('/signin');
        console.log("current user available");
      }
      

  const [subvideos, setsubvideos] = useState([]);

  useEffect(()=>{
    const fetchVideos=async ()=>{
      try {
        const res=await axios.get(`/api/vidoes/videos/subscribed/${currentUser._id}`);
        setsubvideos(res.data);
        console.log("set data videos response");
        console.log(res.data);
        
      } catch (error) {
        console.log("this is error on  url ");
        console.log(error);
      }
    };
    fetchVideos();
  },[]);

    return (
      <>
        <Container>
        {subvideos.map((subvideo)=>(
          <SubscribedvideoCard key={subvideo._id} subvideo={subvideo}/>
        ))}
      </Container>
      </>
    )
  }
  


export default SubscribedVideo
