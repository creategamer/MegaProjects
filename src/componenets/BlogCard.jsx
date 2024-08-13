// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const CardContainer = styled.div`
//   background-color: ${({ theme }) => theme.soft};
//   border-radius: 8px;
//   padding: 20px;
//   margin: 30px;
//   width: 300px;
//   height: auto; /* Adjusted height */
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between; /* Added to evenly distribute content */
// `;

// const CardImage = styled.img`
//   width: 100%;
//   border-radius: 8px;
//   max-height: 200px; /* Adjusted max height */
//   object-fit: cover;
// `;

// const Title = styled.h1`
//   font-size: 20px; /* Adjusted font size */
//   color: ${({ theme }) => theme.text}; /* Updated to use theme text color */
//   margin-top: 16px;
//   margin-bottom: 12px; /* Added margin bottom for spacing */
// `;

// const Description = styled.p`
//   font-size: 14px; /* Adjusted font size */
//   color: ${({ theme }) => theme.textSoft}; /* Updated to use theme text soft color */
//   margin-top: 8px;
// `;

// const ReadMoreLink = styled(Link)`
//   text-decoration: none;
//   color: #007bff; /* Adjusted link color */
//   font-weight: bold;
// `;

// const BlogCard = ({ blog }) => {
//   return (
//     <Link to={`/bloging/${blog._id}`} style={{textDecoration:"none"}}>
//          <CardContainer>
//       <CardImage src={blog.imgUrl} alt={blog.title} />
//       <div>
//         <Title>{blog.title}</Title>
//         <Description>{blog.desc}</Description>
//         <ReadMoreLink to={`/bloging/${blog._id}`}>Read more</ReadMoreLink>
//       </div>
//     </CardContainer>
//     </Link>
//   );
// };

// export default BlogCard;


import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.soft};
  border-radius: 8px;
  padding: 20px;
  margin: 30px;
  width: 300px;
  height: auto; /* Adjusted height */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Added to evenly distribute content */
  transition: transform 0.3s ease-in-out, border-color 0.3s ease;
  border: 2px solid ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${({ theme }) => theme.darkSoft};
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
  max-height: 200px; /* Adjusted max height */
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 20px; /* Adjusted font size */
  color: ${({ theme }) => theme.text}; /* Updated to use theme text color */
  margin-top: 16px;
  margin-bottom: 12px; /* Added margin bottom for spacing */
`;

const DescriptionContainer = styled.div`
  height: 100px; /* Fixed height for description container */
  overflow: hidden; /* Hide overflow text */
`;

const Description = styled.p`
  font-size: 14px; /* Adjusted font size */
  color: ${({ theme }) => theme.textSoft}; /* Updated to use theme text soft color */
  margin-top: 8px;
  text-overflow: ellipsis; /* Add ellipsis for overflow text */
`;

const ReadMoreLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary}; /* Adjusted link color */
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.primaryHover}; /* Adjusted link hover color */
  }
`;

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/bloging/${blog._id}`} style={{textDecoration:"none"}}>
      <CardContainer>
        <CardImage src={blog.imgUrl} alt={blog.title} />
        <div>
          <Title>{blog.title}</Title>
          <DescriptionContainer>
            <Description>{blog.desc}</Description>
          </DescriptionContainer>
          <ReadMoreLink to={`/bloging/${blog._id}`}>Read more</ReadMoreLink>
        </div>
      </CardContainer>
    </Link>
  );
};

export default BlogCard;
