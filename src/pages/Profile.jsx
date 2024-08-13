import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
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

const ProfilePage = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [successMessage, setSuccessMessage] = useState('');

  const navigate=useNavigate()
  
    if (!currentUser) {
      navigate('/signin');
    }
    
  if (!currentUser) {
    return null; // or render a loading indicator
  }
  
  const [userData, setUserData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    subscribers: currentUser.subscribers
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data using Axios or any other method
    axios.put(`/api/users/${currentUser._id}`, userData) // Assuming this endpoint updates user data
      .then(response => {
        console.log('User data updated successfully:', response.data);
        // Optionally, show a success message to the user
        setSuccessMessage('Data updated successfully!');
      })
      .catch(error => {
        console.error('Error updating user data:', error);
        // Optionally, show an error message to the user
        setSuccessMessage('Somethink wrong on data!');
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Profile</Title>
        <SubTitle>Edit your profile information</SubTitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={userData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={userData.email}
            onChange={handleChange}
          />
          <Button type="submit">Save Changes</Button>
        </form>
        {successMessage && <p style={{ color: 'green', textAlign: 'center' }}>{successMessage}</p>}
        {/* <p>Subscribers: {userData.subscribers}</p> */}
      </Wrapper>
    </Container>
  );
};

export default ProfilePage;
