import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgLighter}; /* Adjust background color */
  padding: 48px;
`;

const Card = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.textSoft};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #4f46e5;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #372fbc;
  }
`;

const Message = styled.div`
  text-align: center;
  font-size: 16px;
  color: #372fbc;
`;

const UseLinks = styled.span`
  color: blue;
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/update-password', {
        email,
        newPassword,
        confirmPassword
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleSignin = () => {
    navigate('/signin'); // Navigate to the signin page
  };

  return (
    <Container>
      <Card>
        <Title>Forgot Password</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit">Reset Password</Button>
        </Form>
        <p>
            Return signin page?{' '}
            <UseLinks onClick={handleSignin}>Sign In Here</UseLinks>
          </p>
        {message && <Message>{message}</Message>}
      </Card>
    </Container>
  );
};

export default ForgotPassword;
