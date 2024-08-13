import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  background-color:${({theme})=>theme.soft}
  border-radius: 8px;
  padding: 20px;
  margin:30px;
  width: 300px;
  height:330px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.9);
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  color:${({theme})=>theme.textSoft};
  margin-top: 16px;
`;

const Description = styled.p`
  color:${({theme})=>theme.textSoft};
  margin-top: 8px;
`;

const SubscriptionBlogcard = ({userBlog}) => {
  return (
    <>
     <Link to={`/bloging/${userBlog._id}`} style={{textDecoration:"none"}}>
        <CardContainer>
          <CardImage src={userBlog.imgUrl} alt={userBlog.title} />
          <Title>Title:{userBlog.title}</Title>
          <Description>Desc::{userBlog.desc}</Description>
        </CardContainer>
    </Link>
    </>
  )
}

export default SubscriptionBlogcard
