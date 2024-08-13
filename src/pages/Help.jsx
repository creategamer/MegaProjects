import React from 'react';
import styled from 'styled-components';

// Styled components for the page layout
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
`;

const Help = () => {
  return (
    <PageContainer>
      <Section>
        <Title>Uploading Videos</Title>
        <Description>
          Learn how to upload videos to your mediahub account and share them with your audience.
        </Description>
      </Section>
      <Section>
        <Title>Liking and Disliking Videos</Title>
        <Description>
          Understand how to like or dislike videos to express your feedback on the content.
        </Description>
      </Section>
      <Section>
        <Title>Saving Videos</Title>
        <Description>
          Discover how to save videos to your playlist for easy access later.
        </Description>
      </Section>
      <Section>
        <Title>Uploading Blogs</Title>
        <Description>
          Explore the process of creating and publishing blog posts on mediahub.
        </Description>
      </Section>
      <Section>
        <Title>Viewing Blogs</Title>
        <Description>
          Learn how to browse and read blogs posted by other users on mediahub.
        </Description>
      </Section>
      <Section>
        <Title>Uploading Music</Title>
        <Description>
          Learn how to upload your favorite music tracks to share with the community.
        </Description>
      </Section>
      <Section>
        <Title>Viewing Music</Title>
        <Description>
          Discover how to explore and listen to the latest music uploaded by users.
        </Description>
      </Section>
      <Section>
        <Title>Latest News</Title>
        <Description>
          Stay updated with the latest news and announcements from mediahub.
        </Description>
      </Section>
    </PageContainer>
  );
};

export default Help;
