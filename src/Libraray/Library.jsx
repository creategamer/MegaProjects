import React from 'react'
import { useEffect } from 'react';
import  axios  from 'axios';
import { useState } from 'react';
import LibraryCard from './LibraryCard';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  width: 100%;
  background-color:${({theme})=>theme.bgLighter}; /* Transparent white background */
  padding: 20px;
`;

const VideoPart = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
`;

const Library = () => {

  const { currentUser } = useSelector((state) => state.user);
  //alert part
  const [showAlert, setShowAlert] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    if (!currentUser) {
      setShowAlert(true);
      navigate(`/signin`);
    }
  }, [currentUser]);

  const [videos, setVideos] = useState([]);
    useEffect(() => {
        const fetchVideos = async () => {
          try {
            
            const res = await axios.get(`/api/vidoes/sub`);
            console.log("Current user videos:");
            console.log(res.data);
            setVideos(res.data)
        } catch (error) {
            console.error("Error fetching current user videos:", error);
          }
        };
        fetchVideos();
      }, []);
  return (
    <>
    <Container>
        <VideoPart>
            {videos.map((Libvideo)=>(
            <LibraryCard key={Libvideo._id} Libvideo={Libvideo} />
            ))}
        </VideoPart>
    </Container> 
    </>
  )
}

export default Library
