import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';

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

const AdminProfile = () => {
  const [newPassword, setNewPassword] = useState('');
  const { currentUser } = useSelector((state) => state.user);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/admin/${currentUser.name}/update-password`, { password: newPassword });
      alert('Password updated successfully!');
      console.log("update password successfully");
      // Clear the input field after successful password update
      setNewPassword('');
    } catch (error) {
      console.error('Error updating password:', error);
      alert('An error occurred while updating password. Please try again.');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Change Admin Password</Title>
        <form onSubmit={handleChangePassword}>
          {/* <label>New Password:</label> */}
          <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
          <Button type="submit">Update Password</Button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default AdminProfile;
