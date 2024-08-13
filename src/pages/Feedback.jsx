import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
  background-color:${({theme})=>theme.bgLighter};
`;

const Wrapper = styled.div`
  width: 400px;
  background-color:${({theme})=>theme.bgLighter};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Linke = styled.span`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #777;

  &:last-child {
    margin-top: 10px;
  }
`;

const FeedbackPage = () => {

  
  const [GiveMessage, setGiveMessage] = useState('');

  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    phonenumber: '',
    feedbacks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/feedback', feedback);
      console.log(res.data);
      setGiveMessage("given feedback successfully");
      // Optionally, show a success message or redirect the user
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Optionally, show an error message to the user
      setGiveMessage(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Feedback</Title>
        <SubTitle>We'd love to hear from you!</SubTitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={feedback.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={feedback.email}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="phonenumber"
            placeholder="Your Phone Number"
            value={feedback.phonenumber}
            onChange={handleChange}
          />
          <TextArea
            name="feedbacks"
            placeholder="Your Feedback"
            rows="4"
            value={feedback.feedbacks}
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </form>
        
        {GiveMessage && <p style={{ color: 'green', textAlign: 'center' }}>{GiveMessage}</p>}
        <Linke>Help</Linke>
        <Linke>Privacy</Linke>
      </Wrapper>
    </Container>
  );
};

export default FeedbackPage;
