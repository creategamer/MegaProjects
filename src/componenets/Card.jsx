// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components'
// import {format} from 'timeago.js';
// import { useSelector } from 'react-redux';
// import { FaRegCircleUser } from "react-icons/fa6";


// const Container=styled.div`
//   width:${(props)=>props.type!=="sm" && "360px"};
//   margin-bottom:${(props)=>props.type==="sm" ? "10px" : "45px"};
//   cursor:pointer;
//   display:${(props)=>props.type==="sm" && "flex"};
//   flex-direction: column;
//   gap:10px;
//   padding:7px;
//   box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
//   border-radius:12px;
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//   }
// `;


// const Image=styled.img`
//   width:100%;
//   height:${(props)=>props.type==="sm" ? "120px" : "202px"};
//   background-color:#999;
//   border-radius:8px;
//   flex:1;
// `;

// const Details=styled.div`
//   display:flex;
//   margin-top:${(props)=>props.type !=="sm" && "16px"};
//   gap:12px;
// `;

// const ChangeImage=styled.img`
//   width:36px;
//   height:36px;
//   border-radius:50%;
//   background-color:#999;
//   display:${(props)=>props.type==="sm" && "none"};
// `;

// const Texts=styled.div``;

// const Title=styled.h1`
//   font-size:16px;
//   font-weight:500;
//   color:${({theme})=>theme.text}
// `;

// const ChannelName=styled.h2`
//   font-size:14px;
//   color:${({theme})=>theme.textSoft};
//   margin:9px 0px;

// `;

// const Info=styled.div`
//   font-size:14px;
//   color:${({theme})=>theme.textSoft}
// `;


// const Card = ({type,video}) => {

  
//   const {currentUser}=useSelector((state)=>state.user);
//   const [channel,setChannel]=useState({})

//   // console.log("this is video card detail to know");
//   // console.log(video);
  

//   useEffect(()=>{    
//     const fetchChannel=async ()=>{
//       const res=await axios.get(`/api/users/find/${video.userId}`);
//       setChannel(res.data);
//     };
//     fetchChannel();
//   },[video.userId])

//   return (

//     <Link to={`/video/${video._id}`} style={{textDecoration:"none"}}>
//       <Container type={type}>
//         <Image 
//           type={type}
//           src={video.imgUrl}
//         />
//         <Details type={type}>
//           {video.imgUrl ? (
//             <ChangeImage
//               type={type}
//               src={video.imgUrl}
//               />
//               ) : (
//               <FaRegCircleUser  /> // Adjust icon size based on type
//           )}

//           <Texts>
//             <Title>{video.title}</Title>
//             <ChannelName>{channel.name}</ChannelName>
//             <Info>{video.views} views * {format(video.createdAt)}</Info>
//           </Texts>
//         </Details>
//       </Container>
//     </Link>
//   );
// };

// export default Card


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { format } from 'timeago.js';
// import { useSelector } from 'react-redux';
// import { FaRegCircleUser } from 'react-icons/fa6';

// const Container = styled.div`
//   width: ${(props) => (props.type !== 'sm' && '360px')};
//   margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
//   cursor: pointer;
//   display: ${(props) => props.type === 'sm' && 'flex'};
//   flex-direction: column;
//   gap: 10px;
//   padding: 6px;
//   box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.7);
//   border-radius: 12px;
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
//   background-color: #999;
//   border-radius: 8px;
//   flex: 1;
// `;

// const Details = styled.div`
//   display: flex;
//   margin-top: ${(props) => props.type !== 'sm' && '16px'};
//   gap: 12px;
// `;

// const ChangeImage = styled.img`
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   background-color: #999;
//   display: ${(props) => props.type === 'sm' && 'none'};
// `;

// const Texts = styled.div``;

// const Title = styled.h1`
//   font-size: 16px;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text};
// `;

// const ChannelName = styled.h2`
//   font-size: 14px;
//   color: ${({ theme }) => theme.textSoft};
//   margin: 9px 0px;
// `;

// const Info = styled.div`
//   font-size: 14px;
//   color: ${({ theme }) => theme.textSoft};
// `;

// const Card = ({ type, video }) => {
//   const navigate = useNavigate();
//   const { currentUser } = useSelector((state) => state.user);
//   const [channel, setChannel] = useState({});

//   useEffect(() => {
//     const fetchChannel = async () => {
//       const res = await axios.get(`/api/users/find/${video.userId}`);
//       setChannel(res.data);
//     };
//     fetchChannel();
//   }, [video.userId]);

//   // Handle click event
//   const handleClick = () => {
//     if (currentUser) {
//       navigate(`/video/${video._id}`);
//     } else {
//       // Redirect to sign-in page if currentUser is not available
//       navigate('/sign-in');
//     }
//   };

//   return (
//     <Container type={type} onClick={handleClick}>
//       <Image type={type} src={video.imgUrl} />
//       <Details type={type}>
//         {video.imgUrl ? (
//           <ChangeImage type={type} src={video.imgUrl} />
//         ) : (
//           <FaRegCircleUser /> // Adjust icon size based on type
//         )}

//         <Texts>
//           <Title>{video.title}</Title>
//           <ChannelName>{channel.name}</ChannelName>
//           <Info>
//             {video.views} views * {format(video.createdAt)}
//           </Info>
//         </Texts>
//       </Details>
//     </Container>
//   );
// };

// export default Card;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'timeago.js';
import { useSelector } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';

const Container = styled.div`
  width: ${(props) => (props.type !== 'sm' && '360px')};
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '45px')};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  flex-direction: column;
  gap: 10px;
  padding: 6px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  transition: transform 0.3s ease-in-out, border-color 0.3s ease;
  border: 2px solid ${({ theme }) => theme.text};
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === 'sm' ? '120px' : '202px')};
  background-color: #999;
  border-radius: 8px;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '16px'};
  gap: 12px;
`;

const ChangeImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === 'sm' && 'none'};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/api/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  // Handle click event
  const handleClick = () => {
    if (currentUser) {
      navigate(`/video/${video._id}`);
    } else {
      // Redirect to sign-in page if currentUser is not available
      alert('Please sign in to view this content.');
      navigate('/signin');
    }
  };

  return (
    <Container type={type} onClick={handleClick}>
      <Image type={type} src={video.imgUrl} />
      <Details type={type}>
        {video.imgUrl ? (
          <ChangeImage type={type} src={video.imgUrl} />
        ) : (
          <FaRegCircleUser /> // Adjust icon size based on type
        )}

        <Texts>
          <Title>{video.title}</Title>
          <ChannelName>{channel.name}</ChannelName>
          <Info>
            {video.views} views * {format(video.createdAt)}
          </Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
