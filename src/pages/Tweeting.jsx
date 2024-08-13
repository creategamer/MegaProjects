import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color:${({theme})=>theme.bgLighter};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-in-out;
    padding: 20px;
    margin-bottom: 20px;
    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Username = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.text};
  
`;

const Tweeting = ({ allTweet }) => {
  return (
    <Card>
      {/* <UserInfo>
        <Avatar src={allTweet.user.avatar} alt="Avatar" />
        <Username>{allTweet.user.username}</Username>
      </UserInfo> */}
      <Desc>{allTweet.desc}</Desc>
    </Card>
  );
};

export default Tweeting;
