import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import axios from "axios"
import BlogCard from '../componenets/BlogCard';


const Container=styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;

`;

const Card=styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  
`;

const MainTitle=styled.div`
  width:100%;
  display:flex;
`;

const Title=styled.h1`
    font-size:24px;
    color:white;
    display:flex;
    width:100%;     
`;

const Blogs = () => {

    const [blogs, setblogs] = useState([]);
    
    //this is for pratice
    // useEffect(()=>{
    //     axios.get('/api/blog/random')
    //     .then((res)=>{
    //         setblogs(res.data)
            
    //         console.log(res.data);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })


    useEffect(()=>{
        const fetchVideos=async ()=>{
          try {
            const res=await axios.get('/api/blog/random');
            setblogs(res.data)
            // console.log("set data Blogs response");
            // console.log(res.data);
          } catch (error) {
            console.log("this is error on Blogs url ");
            console.log(error);
          }
        };
        fetchVideos();
  },[]);


return (
    <Container>
        <MainTitle>
          <Title></Title>
        </MainTitle>
        <Card>  
        {blogs.map((blog)=>(
          <BlogCard
            key={blog._id} 
            blog={blog} 
          />
        ))}
        </Card>
    </Container>
  );
}

export default Blogs
