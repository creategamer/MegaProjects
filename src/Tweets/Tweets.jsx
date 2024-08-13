import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import  axios  from 'axios';
import { styled } from 'styled-components';
import Gettweets from './Gettweets';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;


const Tweetings=styled.div`
  

`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;


const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
  color: #4CAF50;
`;

const NewComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
`;

const Desc = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid #4CAF50;
  border-radius: 10px;
  font-size: 18px;
  resize: none;
`;

const Button = styled.button`
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
`;


const Tweets = () => {
    
    const { currentUser } = useSelector((state) => state.user);
    const [allTweeting, setAllTweeting] = useState([]);
    const [getTweets, getAllTweets] = useState([]);
    
    
    const [inputs, setInputs] = useState({ desc: '' });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      };

    console.log(currentUser);//this is give in using redux tool kit

    const handleUpload = async (e) => {
      e.preventDefault();
      try {
          console.log("enter");
          // console.log(currentUser);
          const { name } = currentUser; // Assuming currentUser is just the name
          // console.log(name);
          const res = await axios.post('/api/tweeting/tweets', { name, desc: inputs.desc });
          // console.log(res.data);
          console.log("tweet successfully");
          setAllTweeting((prevTweets) => [res.data, ...prevTweets]); // Prepend new tweet to existing tweets array
          setInputs({ desc: '' }); // Clear textarea after upload
      } catch (error) {
          console.log(error);
          console.log('Error on uploading');
      }
  };

      useEffect(() => {
        const fetchTweets = async () => {
          try {
            const res = await axios.get('/api/tweeting/tweets');
            console.log(res.data);
            getAllTweets(res.data);
          } catch (error) {
            console.log('Error fetching tweets:', error);
          }
        };
        fetchTweets();
      }, []);

    return (
    <>
        <Container>
      
            <Title>Lets Go Community </Title>
            <NewComment>
            {/* <Avatar src={currentUser.img} alt="Avatar" /> */}
            <Desc
                placeholder="Let's go community......"
                rows={3}
                name="desc"
                value={inputs.desc}
                onChange={handleChange}
            />
            <Button onClick={handleUpload}>Post</Button>
            
            </NewComment>
            <Tweetings>
            {getTweets.map((getTweet) => (
            <Gettweets key={getTweet._id} getTweet={getTweet} />
            ))}
            </Tweetings>
        </Container> 
    </>
  )
}

export default Tweets
