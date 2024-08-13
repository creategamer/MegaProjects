// AdminUserPanel.js

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled components for the AdminUserPanel
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.bgLighter};
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const AdminUserPanel = () => {


  return (
    <Container>
      <Wrapper>
        <Title>User change password</Title>
        <Form>
          <Input
            type="text"
            name="username"
            placeholder="Enter username"
            
          />
          <Input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            
          />
          <Button type="submit">Update User</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AdminUserPanel;
