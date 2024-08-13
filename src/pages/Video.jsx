import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { MdDataSaverOn } from "react-icons/md";
import Comments from '../componenets/Comments';
import Card from '../componenets/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchStart, fetchSuccess,dislike,like } from '../redux/videoSlice';
import { subscription } from '../redux/userSlice';
import axios from "axios"
import { format } from 'timeago.js';
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import Recommendation from '../componenets/Recommendation';
import { FaRegCircleUser } from "react-icons/fa6";
import { VscSaveAll } from "react-icons/vsc";


const Container = styled.div`
    display: flex;
    gap: 24px;
    border:1px solid gray;
`;

const Content = styled.div`
    flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const StyledIcon = styled(FaRegCircleUser)`
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.textSoft};
`;

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
    font-weight: 500;
`;

const ChannelCouter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`;

const Description = styled.p`
    font-size: 14px;
`;

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`;

const VideoFrame = styled.video`
    max-height: 720px;
    width: 100%;
    object-fit: cover;
`;
const Video = () => {

    const {currentUser}=useSelector((state)=>state.user);

    const navigate=useNavigate()  
    const [showAlert, setShowAlert] = useState(false);
    if (!currentUser) {
        navigate('/signin');
      }
      
    if (!currentUser) {
      return null; // or render a loading indicator
    }
    

    // const {currentVideo}=useSelector((state)=>state.video);
    const { currentVideo, loading } = useSelector((state) => state.video);

    const dispatch=useDispatch();

    const path=useLocation().pathname.split("/")[2];
    
    const [channel,setChannel]=useState({});
    

    useEffect(() => {
        dispatch(fetchStart())  
        const fetchData = async () => {
          try {
            const videoRes = await axios.get(`/api/vidoes/find/${path}`);
            const channelRes = await axios.get(
              `/api/users/find/${videoRes.data.userId}`
            );
            
            // console.log("fetch data channel res ");
            // console.log(channelRes.data);
            
            // console.log("video res");
            // console.log(videoRes);
            

            setChannel(channelRes.data);
            dispatch(fetchSuccess(videoRes.data));
          } catch (err) {}
        };
        fetchData();
      }, [path, dispatch]);
    

    
    console.log("this is current videos details ");
    console.log(currentVideo);


    if (loading || !currentVideo) {
        return <div>Loading...</div>;
    }
    
    const handleLike = async () => {
        axios.put(`/api/users/like/${currentVideo._id}`)
        .then(response => {
            console.log("likes successful");
            // console.log('User updated successfully:', response.data);
          })
          .catch(error => {
            console.log("likes errors");
          });
        
        dispatch(like(currentUser._id));
      };


      const handlesave = async () => {
        axios.put(`/api/users/savingvid/${currentVideo._id}`)
        .then(response => {
            console.log("saved successful");
            // console.log('User updated successfully:', response.data);
          })
          .catch(error => {
            console.log("likes errors");
          });
        
        dispatch(like(currentUser._id));
      };

    const handleDislike =async () =>{
        await axios.put(`/api/users/dislike/${currentVideo._id}`);
        console.log("dislikes successful");
        dispatch(dislike(currentUser._id));
    }

    //sub or not
    const handleSub = async () => {
        try {
            currentUser.subscribedUsers.includes(channel._id)
              ? await axios.put(`/api/users/unsub/${channel._id}`)
              : await axios.put(`/api/users/sub/${channel._id}`);
            dispatch(subscription(channel._id));
        } catch (error) {
            console.log("any subscribe error are faces that");
        }
      };

        // Additional code...

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentVideo.title,
        text: 'Check out this video!',
        url: window.location.href,
      })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that do not support the share API
      setShowAlert(true);
    }
  };
      

        return (
            <>
            <Container>
            <Content>
                <VideoWrapper>
                    {/* <iframe
                        width="100%"
                        height="720"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        title="youtube video player"
                        frameBorder="0"
                        
                        allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture'
                        allowFullScreen
                    ></iframe> */}
                    <VideoFrame src={currentVideo.videoUrl} controls />
                </VideoWrapper>
                <Title>{currentVideo.title}</Title>
                <Details>
                    <Info>{currentVideo.views} views * {format(currentVideo.createdAt)} </Info>
                    <Buttons>
                        <Button onClick={handleLike}>
                            {currentVideo.likes?.includes(currentUser?._id) ? (
                            <AiFillLike />
                            ) : (
                                <AiOutlineLike />
                            )}{" "}
                            {currentVideo.likes?.length}
                        </Button>
        
                    
                    <Button onClick={handleDislike}>
                        {currentVideo.dislikes?.includes(currentUser._id) ? (
                        <BiSolidDislike />
                        ) : (
                        <AiOutlineDislike />
                        )}{" "}
                        Dislike
                    </Button> 
                    
                                    
                        {/* temp store button  <AiFillLike /> <AiOutlineLike /> */}
                        {/* temp store button  <BiSolidDislike /> <AiOutlineDislike /> */}
        
                        <Button onClick={handleShare}>
                            <CiShare2 /> Share
                        </Button>
                        <Button onClick={handlesave}>
                        {currentVideo.saves?.includes(currentUser._id) ? (
                          <VscSaveAll />
                        ) : (
                          <MdDataSaverOn />
                        )}{" "}
                        saved
                    </Button>
                        {/* <Button><MdDataSaverOn />Save</Button> */}
                    </Buttons>
                </Details>
                <Hr/>
                <Channel>
                    <ChannelInfo>
                        
                        {channel.img ? (
                          <Image src={channel.img}></Image>
                              ) : (
                              //<FaRegCircleUser  /> // Adjust icon size based on type
                              <StyledIcon /> // Adjust icon size and color based on your requirements
                          )}

                        <ChannelDetail>
                            <ChannelName>{channel.name}</ChannelName>
                            <ChannelCouter>{channel.subscribers} subscribers</ChannelCouter>
                            <Description>{currentVideo.desc}</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe onClick={handleSub}>
                    {currentUser.subscribedUsers?.includes(channel._id)
                      ? "SUBSCRIBED"
                      : "subscribes"}
                  </Subscribe>
                </Channel>
                <Hr/>
                {/* <Comments videoId={currentVideo._id} />       */}
                {/* Display comments component here */}
                <Comments videoId={currentVideo._id} />
            </Content>
            <Recommendation type="sm" tags={currentVideo.tags} />
        
          </Container>
          
            </>
          )
      
      }
        

export default Video
