import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../componenets/Card.jsx';
import axios from "axios"

const Container=styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    
      @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically on smaller screens */
        align-items: center; /* Center items vertically */
      }
`;



const Home = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const fetchVideos=async ()=>{
      try {
        const res=await axios.get(`/api/vidoes/${type}`);
        setVideos(res.data);
        // console.log("set data videos response");
        // console.log(res.data);
      } catch (error) {
        console.log("this is error on --- home page--- url ");
        console.log(error);
      }
    };
    fetchVideos();
  },[type]);

  
  return (
    <Container>
      
      {videos.map((video)=>(
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};


export default Home;




// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import Card from '../components/Card.jsx';
// import axios from "axios";

// const Container = styled.div`
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     padding: 0 10px; /* Add some padding to the sides */
    
//     @media (max-width: 768px) {
//         flex-direction: column; /* Stack items vertically on smaller screens */
//         align-items: center; /* Center items vertically */
//     }
// `;

// const Home = ({ type }) => {
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         const fetchVideos = async () => {
//             try {
//                 const res = await axios.get(`/api/videos/${type}`);
//                 setVideos(res.data);
//             } catch (error) {
//                 console.log("Error fetching videos:", error);
//             }
//         };
//         fetchVideos();
//     }, [type]);

//     return (
//         <Container>
//             {videos.map((video) => (
//                 <Card key={video._id} video={video} />
//             ))}
//         </Container>
//     );
// };

// export default Home;
