import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Card = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Username = styled.span`
  font-weight: bold;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: ${({ theme }) => theme.bgLight};
  width: 100%;
`;

const DescInput = styled.textarea`
  border: 2px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: ${({ theme }) => theme.bgLight};
  resize: none;
  width: 100%;
`;

const PostButton = styled.button`
  border-radius: 3px;
  border: none;
  padding: 8px 15px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textsoft};
  transition: background-color 0.3s;
  align-self: flex-end;

  &:hover {
    background-color: ${({ theme }) => theme.softHover};
  }
`;

const Gettweets = ({ getTweet }) => {
  const [name, setUsername] = useState('');
  const { currentUser } = useSelector((state) => state.user);
  const [replyDesc, setReplyDesc] = useState('');
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);

  const handleReply = async () => {
    try {
      const { name: tweetsname } = currentUser;
      await axios.post(`/api/tweeting/tweets/${name}/replies`, {
        name: tweetsname,
        desc: replyDesc,
      });
      setReplyDesc('');
      setReplyBoxOpen(false);
    } catch (error) {
      console.error('Error replying:', error);
    }
  };

  return (
    <Card>
      <UserInfo>
        {/* <Avatar src={getTweet.avatar} alt="Avatar" /> */}
        <Username>{getTweet.name}</Username>
      </UserInfo>
      <Desc>{getTweet.desc}</Desc>
      {replyBoxOpen && (
        <>
          <Input
            type="text"
            name="username"
            placeholder="Your username"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
          <DescInput
            placeholder="Write your reply..."
            value={replyDesc}
            onChange={(e) => setReplyDesc(e.target.value)}
          />
          <PostButton onClick={handleReply}>Post</PostButton>
        </>
      )}
    </Card>
  );
};

export default Gettweets;
