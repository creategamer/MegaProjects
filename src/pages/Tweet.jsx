import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Tweeting from './Tweeting';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textsoft};
  `;

const NewComment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Desc = styled.textarea`
  border: 4px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  resize: none;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 8px 15px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textsoft};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.softHover};
  }
`;

const Tweet = () => {
  const navigate=useNavigate()
  const { currentUser } = useSelector((state) => state.user);
  
  // if(!currentUser){
  //   alert("you are not login please login")
  //   navigate(`/signin`);
  // }

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setShowAlert(true);
      navigate(`/signin`);
    }
  }, [currentUser]);

  const [allTweets, setAllTweets] = useState([]);
  const [inputs, setInputs] = useState({ desc: '' });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/tweets/tweets', { ...inputs });
      setAllTweets((prevTweets) => [res.data, ...prevTweets]); // Prepend new tweet to existing tweets array
      setInputs({ desc: '' }); // Clear textarea after upload
    } catch (error) {
      console.log(error);
      console.log('Error on uploading');
    }
  };

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await axios.get('/api/tweets/randomtweet');
        setAllTweets(res.data);
      } catch (error) {
        console.log('Error fetching tweets:', error);
      }
    };
    fetchTweets();
  }, []);

  return (
    <Container>
      {showAlert && (
        <Alert>
          You need to log in to access this page! Please sign in to continue.
        </Alert>
      )}
      <Title>Lets Tweeting </Title>
      <NewComment>
        {/* <Avatar src={currentUser.img} alt="Avatar" /> */}
        <Desc
          placeholder="Let's tweet......"
          rows={3}
          name="desc"
          value={inputs.desc}
          onChange={handleChange}
        />
        <Button onClick={handleUpload}>Tweet</Button>
      </NewComment>
      {allTweets.map((allTweet) => (
        <Tweeting key={allTweet._id} allTweet={allTweet} />
      ))}
    </Container>
  );
};

export default Tweet;
