import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const CategoryTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:20px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  box-shadow: 0 9px 13px rgba(0, 0, 0, 0.7);
  padding: 20px;
  flex: 1 0 300px;
  border:1px solid gray;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p``;

const NewsComponent = () => {
  const [politicalNews, setPoliticalNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const politicalResponse = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in', // Country code for India
            category: 'politics',
            apiKey: 'c4b74a24dd5640238196f370bc1f469c',
          }
        });

        const technologyResponse = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            category: 'technology',
            apiKey: 'c4b74a24dd5640238196f370bc1f469c',
          }
        });

        const businessResponse = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            category: 'business',
            apiKey: 'c4b74a24dd5640238196f370bc1f469c',
          }
        });

        setPoliticalNews(politicalResponse.data.articles);
        setTechnologyNews(technologyResponse.data.articles);
        setBusinessNews(businessResponse.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Container>
      <CategoryTitle>Political News</CategoryTitle>
      <CardContainer>
        {politicalNews.map((article, index) => (
          <Card key={index}>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.description}</CardDescription>
          </Card>
        ))}
      </CardContainer>

      <CategoryTitle>Technology News</CategoryTitle>
      <CardContainer>
        {technologyNews.map((article, index) => (
          <Card key={index}>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.description}</CardDescription>
          </Card>
        ))}
      </CardContainer>

      <CategoryTitle>Business News</CategoryTitle>
      <CardContainer>
        {businessNews.map((article, index) => (
          <Card key={index}>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.description}</CardDescription>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default NewsComponent;
