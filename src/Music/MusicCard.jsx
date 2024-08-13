// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled components for card elements
// const CardContainer = styled.div`
//   width: 300px;
//   background-color: #fff;
//   border-radius: 15px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   margin: 20px;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-top-left-radius: 15px;
//   border-top-right-radius: 15px;
// `;

// const CardContent = styled.div`
//   padding: 20px;
// `;

// const Title = styled.h3`
//   margin-bottom: 10px;
//   font-size: 22px;
//   color: #333;
// `;

// const Singer = styled.p`
//   font-size: 16px;
//   color: #666;
//   margin-bottom: 5px;
// `;

// const Description = styled.p`
//   font-size: 18px;
//   color: #777;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;

// const MusicCard = ({ music }) => {
//   return (
//     <StyledLink to={`/musicPart/${music._id}`}>
//       <CardContainer>
//         <CardImage src={music.imgUrl} alt="Song Image" />
//         <CardContent>
//           <Title>{music.songsname}</Title>
//           <Singer>{music.singer}</Singer>
//           <Description>{music.desc}</Description>
//         </CardContent>
//       </CardContainer>
//     </StyledLink>
//   );
// };

// export default MusicCard;


import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for card elements
const CardContainer = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
  transition: transform 0.3s ease-in-out, border-color 0.3s ease;
  border: 2px solid ${({ theme }) => theme.text};
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
  color: ${({ theme }) => theme.text};
`;

const Singer = styled.p`
  font-size: 16px;
  // color: ${({ theme }) => theme.textSecondary};
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  // color: ${({ theme }) => theme.textSecondary};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MusicCard = ({ music }) => {
  return (
    <StyledLink to={`/musicPart/${music._id}`}>
      <CardContainer>
        <CardImage src={music.imgUrl} alt="Song Image" />
        <CardContent>
          <Title>{music.songsname}</Title>
          <Singer>{music.singer}</Singer>
          <Description>{music.desc}</Description>
        </CardContent>
      </CardContainer>
    </StyledLink>
  );
};

export default MusicCard;
