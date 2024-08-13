import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../componenets/Card'


const Container=styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:10px;
`

const Search = () => {
    
    const [videos,setVideos]=useState([])
    const query=useLocation().search;

    useEffect(()=>{
        const fetchVideos=async ()=>{
            const res=await axios.get(`/api/vidoes/search${query}`)
            console.log(res.data);
            setVideos(res.data)
        }
        fetchVideos();
    },[query])

    console.log("this is search videos");
    console.log(videos);

    return (
        <Container>
          {videos.map((video)=>(
            <Card key={video._id} video={video} />
          ))}
    
        </Container>
      );
    
    // <Container>
    //     {videos.map((video)=>{
    //         <Card key={video._id} video={video} />
    //     })}
    // </Container>;

}

export default Search
