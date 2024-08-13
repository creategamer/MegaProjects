// import React from 'react';
// import styled from 'styled-components';
// import axios from "axios"

// // Styled components for the card
// const Card = styled.div`
//   border-radius: 8px;
//   padding: 16px;
//   margin: 8px;
//   width: calc(33.33% - 16px); /* Adjust width to fit three cards in a row */
//   box-sizing: border-box;
//   background-color: #fff;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   transition: box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;

// const Title = styled.h2`
//   color: #333;
//   font-size: 18px;
//   margin-bottom: 8px;
// `;

// const Subtitle = styled.p`
//   color: #666;
//   font-size: 14px;
//   margin-bottom: 4px;
// `;

// const Button = styled.button`
//   background-color: #ff3f3f;
//   color: white;
//   border: none;
//   padding: 8px 16px;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #e62828;
//   }
// `;

// const AdminVideocard = ({ video }) => {

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`/api/admin/admin/videos/${video.title}`);

//       console.log(response.data); // Log success message
//       // Implement logic to update UI after deletion (e.g., remove the card from the list)
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       // Implement error handling (e.g., show error message to the user)
//     }
//   };

//   return (
//     <Card>
//       <Title>{video.title}</Title>
      
//       <Subtitle>Description: {video.desc}</Subtitle>
//       <Subtitle>Views: {video.views}</Subtitle>
//       <Subtitle>Created At: {new Date(video.createdAt).toLocaleDateString()}</Subtitle>
//       {/* Add more details as needed */}
//       <Subtitle>Video URL: <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">{video.videoUrl}</a></Subtitle>
//       <Subtitle>Image URL: <a href={video.imgUrl} target="_blank" rel="noopener noreferrer">{video.imgUrl}</a></Subtitle>
//       <Button onClick={handleDelete}>Delete</Button>
//     </Card>
//   );
// };

// export default AdminVideocard;


import React from 'react';
import styled from 'styled-components';
import axios from "axios";

// Styled components for the card
const Card = styled.div`
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: calc(33.33% - 16px); /* Adjust width to fit three cards in a row */
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 18px;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Button = styled.button`
  background-color: #ff3f3f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e62828;
  }
`;

// Container for the URLs
const UrlContainer = styled.div`
  margin-top: 8px;

  a {
    color: #007bff;
    text-decoration: none;
    word-break: break-all; /* Ensures long URLs break properly */
  }
`;

const AdminVideocard = ({ video }) => {

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/admin/admin/videos/${video.title}`);

      console.log(response.data); // Log success message
      // Implement logic to update UI after deletion (e.g., remove the card from the list)
    } catch (error) {
      console.error('Error deleting user:', error);
      // Implement error handling (e.g., show error message to the user)
    }
  };

  return (
    <Card>
      <Title>{video.title}</Title>
      
      <Subtitle>Description: {video.desc}</Subtitle>
      <Subtitle>Views: {video.views}</Subtitle>
      <Subtitle>Created At: {new Date(video.createdAt).toLocaleDateString()}</Subtitle>
      {/* Add more details as needed */}
      <UrlContainer>
        <Subtitle>Video URL: <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">{video.videoUrl}</a></Subtitle>
        <Subtitle>Image URL: <a href={video.imgUrl} target="_blank" rel="noopener noreferrer">{video.imgUrl}</a></Subtitle>
      </UrlContainer>
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
  );
};

export default AdminVideocard;
