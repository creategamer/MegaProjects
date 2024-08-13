import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from "axios"
import SubscriptionvidCard from './SubscriptionvidCard';
import SubscriptionBlogcard from './SubscriptionBlogcard';
import { useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";

const Container = styled.div`
  width: 100%;
  background-color:${({theme})=>theme.bgLighter}; /* Transparent white background */
  padding: 20px;
`;

const ProfileCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1); /* Transparent white background */
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border:1px solid black;
`;

const StyledIcon = styled(FaRegCircleUser)`
  width: 150px; /* Adjust size as needed */
  height: 150px; /* Adjust size as needed */
  color:${({theme})=>theme.textSoft}; /* Example: Change color to red */
`;

const ProfileInfo = styled.div`
  text-align: center;
`;

const ProfileName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
  color:${({theme})=>theme.textSoft};
`;

const ProfileEmail = styled.p`
  font-size: 16px;
  color: #666;
`;

const SubscribersCount = styled.p`
  font-size: 18px;
  color:${({theme})=>theme.textSoft};
  margin-bottom: 5px;
`;

const JoinedDate = styled.p`
  font-size: 16px;
  color:${({theme})=>theme.textSoft};
`;

const Title = styled.h1`
  color:${({theme})=>theme.textSoft};
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;

const VideoPart = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
`;

// const BlogPart=styled.div`

// `;

const BlogPart = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`;


const Subscription = () => {
  
  //this is currentUser
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

  
  const [currentuservideo,getuservideo]= useState([]);
  const [currentuserBlogs,getcurruserBlogs]=useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const userId = currentUser._id; // Assuming you have currentUser object
        const res = await axios.get(`/api/vidoes//currentuservideos/${userId}`);
        // console.log("Current user videos:");
        // console.log(res.data);
        getuservideo(res.data); // Assuming setVideos is a state setter function
      } catch (error) {
        console.error("Error fetching current user videos:", error);
      }
    };
    fetchVideos();
  }, [currentUser._id]); // Assuming currentUser is a dependency


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const userId = currentUser._id; // Assuming you have currentUser object
        const res = await axios.get(`/api/blog/blogs/user/${userId}`);
        // console.log("Current user blogs:");
        // console.log(res.data);
        getcurruserBlogs(res.data); // Assuming setVideos is a state setter function
      } catch (error) {
        console.error("Error fetching current user videos:", error);
      }
    };
    fetchBlogs();
  }, [currentUser._id]); // Assuming currentUser is a dependency


  return (
    <Container>
      {/* <Title>Subscription Details</Title> */}
      <ProfileCard>
        {/* <ProfileImage src={currentUser.img} alt="Profile" /> */}
        {currentUser.img ? (
            <ProfileImage src={currentUser.img} alt="Profile" />
              ) : (
              // <FaRegCircleUser  /> // Adjust icon size based on type
              <StyledIcon /> // Adjust icon size and color based on your requirements
          )}
        
        <ProfileInfo>
          <ProfileName>{currentUser.name}</ProfileName>
          {/* <ProfileEmail>{currentUser.email}</ProfileEmail> */}
          <SubscribersCount>Subscribers: {currentUser.subscribers}</SubscribersCount>
          <JoinedDate>Joined: {new Date(currentUser.createdAt).toLocaleDateString()}</JoinedDate>
        </ProfileInfo>
      </ProfileCard>
      {/* Additional sections or components can be added here */}
      <Title>Total my videos</Title>
      <VideoPart>
        {currentuservideo.map((userVideo)=>(
          <SubscriptionvidCard key={userVideo._id} userVideo={userVideo} />
        ))}
      </VideoPart>
      <Title>Total my Blogs</Title>
      <BlogPart>
        {currentuserBlogs.map((userBlog)=>(
          <SubscriptionBlogcard key={userBlog._id} userBlog={userBlog} />
        ))}
      </BlogPart>

    </Container>
  );
};

export default Subscription;
