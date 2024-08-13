import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 15px;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  width: 100%;
  margin-bottom: 10px;
`;

const More = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-top: 10px;
`;

const UseLinks = styled.span`
  color: blue;
`;

const LinkText = styled.span`
  margin-left: 10px;
`;

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [GiveMessage, setGiveMessage] = useState('');

  const handleSignup = async (e) => {
    try {
      axios.post('/api/auth/signup', { name, password, email })
        .then((res) => {
          console.log(res.data);
          console.log('Signup successful');
          // You can dispatch an action if needed
          navigate('/signin'); // Redirect to signin page after successful signup
          setGiveMessage(name,"signup successfully");
        })
        .catch((err) => {
          console.log(err);
          // Handle signup failure
          setGiveMessage("Signup succesfully");
        });
    } catch (error) {
      console.log(error);
      setGiveMessage(error);
    }
  };

  const handleSignin = () => {
    navigate('/signin'); // Navigate to the signin page
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign Up</Title>
        <SubTitle>To continue to your account</SubTitle>
        <Input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignup}>Sign Up</Button>
        <More>
          <p>
            Already have an account?{' '}
            <UseLinks onClick={handleSignin}>Sign In Here</UseLinks>
          </p>
          
        {GiveMessage && <p style={{ color: 'green', textAlign: 'center' }}>{GiveMessage}</p>}
          <Links>
            <LinkText>Help</LinkText>
            <LinkText>Privacy</LinkText>
          </Links>
        </More>
      </Wrapper>
    </Container>
  );
};

export default Signup;
