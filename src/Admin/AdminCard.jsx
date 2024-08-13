// // import React from 'react';
// // import styled from 'styled-components';
// // import axios from "axios"

// // // Styled components for the card
// // const Card = styled.div`
// //   border: 1px solid #e0e0e0;
// //   border-radius: 8px;
// //   padding: 16px;
// //   margin-bottom: 16px;
// //   background-color: #ffffff;
// //   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// // `;

// // const Title = styled.h2`
// //   color: #333;
// //   font-size: 20px;
// //   margin-bottom: 8px;
// // `;

// // const Subtitle = styled.h3`
// //   color: #666;
// //   font-size: 16px;
// //   margin-bottom: 4px;
// // `;

// // const List = styled.ul`
// //   list-style: none;
// //   padding: 0;
// // `;

// // const ListItem = styled.li`
// //   margin-bottom: 8px;
// // `;

// // const DeleteButton = styled.button`
// //   background-color: #ff3f3f;
// //   color: white;
// //   border: none;
// //   padding: 8px 16px;
// //   border-radius: 4px;
// //   cursor: pointer;
// //   transition: background-color 0.3s ease;

// //   &:hover {
// //     background-color: #e62828;
// //   }
// // `;

// // // Component to render the admin card
// // const AdminCard = ({ allusers }) => {
 
// //   const handleDelete = async () => {
// //     try {
// //       const response = await axios.delete(`/api/admin/admin/users/${allusers.name}`);
// //       console.log(response.data); // Log success message
// //       // Implement logic to update UI after deletion (e.g., remove the card from the list)
// //     } catch (error) {
// //       console.error('Error deleting user:', error);
// //       // Implement error handling (e.g., show error message to the user)
// //     }
// //   };

// //   return (
// //     <Card>
// //       <Title>{allusers.name}</Title>
// //       <Subtitle>Email: {allusers.email}</Subtitle>
// //       <Subtitle>Subscribers: {allusers.subscribers}</Subtitle>
// //       <Subtitle>Joined at: {new Date(allusers.createdAt).toLocaleDateString()}</Subtitle>
// //       {/* Render videos */}
// //       <Subtitle>Videos:</Subtitle>
// //       <List>
// //         {allusers.videos.map(video => (
// //           <ListItem key={video._id}>
// //             <strong>Title:</strong> {video.title}<br />
// //             <strong>Description:</strong> {video.desc}<br />
// //             <strong>Views:</strong> {video.views}<br />
// //           </ListItem>
// //         ))}
// //       </List>
// //       {/* Render blogs */}
// //       <Subtitle>Blogs:</Subtitle>
// //       <List>
// //         {allusers.blogs.map(blog => (
// //           <ListItem key={blog._id}>
// //             <strong>Title:</strong> {blog.title}<br />
// //             <strong>Description:</strong> {blog.desc}<br />
// //             <strong>Views:</strong> {blog.views}<br />
// //           </ListItem>
// //         ))}
// //       </List>
// //       {/* Render tweets */}
// //       <Subtitle>Tweets:</Subtitle>
// //       <List>
// //         {allusers.tweets.map(tweet => (
// //           <ListItem key={tweet._id}>
// //             <strong>Tweet:</strong> {tweet.desc}<br />
// //           </ListItem>
// //         ))}
// //       </List>
// //       {/* Render feedbacks */}
// //       <Subtitle>Feedbacks:</Subtitle>
// //       <List>
// //         {allusers.feedbacks.map(feedback => (
// //           <ListItem key={feedback._id}>
// //             <strong>Feedback:</strong> {feedback.feedbacks}<br />
// //           </ListItem>
// //         ))}
// //       </List>

// //       {/* Delete Button */}
// //       <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
// //     </Card>
// //   );
// // };

// // export default AdminCard;


// import React from 'react';
// import styled from 'styled-components';
// import axios from "axios"

// // Styled components for the card
// const Card = styled.div`
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   padding: 16px;
//   margin-bottom: 16px;
//   background-color: #ffffff;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   color: #333;
//   font-size: 20px;
//   margin-bottom: 8px;
// `;

// const Subtitle = styled.h3`
//   color: #666;
//   font-size: 16px;
//   margin-bottom: 4px;
// `;

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 8px;
// `;

// const DeleteButton = styled.button`
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

// // Component to render the admin card
// const AdminCard = ({ allusers }) => {
 
//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`/api/admin/admin/users/${allusers.name}`);
//       console.log(response.data); // Log success message
//       // Implement logic to update UI after deletion (e.g., remove the card from the list)
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       // Implement error handling (e.g., show error message to the user)
//     }
//   };

//   return (
//     <Card>
//       <Title>{allusers.name}</Title>
//       <Subtitle>Email: {allusers.email}</Subtitle>
//       <Subtitle>Subscribers: {allusers.subscribers}</Subtitle>
//       <Subtitle>Joined at: {new Date(allusers.createdAt).toLocaleDateString()}</Subtitle>
//       {/* Render videos */}
//       <Subtitle>Videos:</Subtitle>
//       <List>
//         {allusers.videos.map(video => (
//           <ListItem key={video._id}>
//             <strong>Title:</strong> {video.title}<br />
//             <strong>Description:</strong> {video.desc}<br />
//             <strong>Views:</strong> {video.views}<br />
//           </ListItem>
//         ))}
//       </List>
//       {/* Render blogs */}
//       <Subtitle>Blogs:</Subtitle>
//       <List>
//         {allusers.blogs.map(blog => (
//           <ListItem key={blog._id}>
//             <strong>Title:</strong> {blog.title}<br />
//             <strong>Description:</strong> {blog.desc}<br />
//             <strong>Views:</strong> {blog.views}<br />
//           </ListItem>
//         ))}
//       </List>
//       {/* Render tweets */}
//       <Subtitle>Tweets:</Subtitle>
//       <List>
//         {allusers.tweets.map(tweet => (
//           <ListItem key={tweet._id}>
//             <strong>Tweet:</strong> {tweet.desc}<br />
//           </ListItem>
//         ))}
//       </List>
//       {/* Render feedbacks */}
//       <Subtitle>Feedbacks:</Subtitle>
//       <List>
//         {allusers.feedbacks.map(feedback => (
//           <ListItem key={feedback._id}>
//             <strong>Feedback:</strong> {feedback.feedbacks}<br />
//           </ListItem>
//         ))}
//       </List>
//       {/* Render music */}
//       <Subtitle>Music:</Subtitle>
//       <List>
//         {allusers.music.map(music => (
//           <ListItem key={music._id}>
//             <strong>Singer:</strong> {music.singer}<br />
//             <strong>Song Name:</strong> {music.songsname}<br />
//             <strong>Description:</strong> {music.desc}<br />
//           </ListItem>
//         ))}
//       </List>
      
//       {/* Delete Button */}
//       <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
//     </Card>
//   );
// };

// export default AdminCard;
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from "axios"

// // Styled components for the card
// const Card = styled.div`
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   padding: 16px;
//   margin-bottom: 16px;
//   background-color: #ffffff;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   color: #333;
//   font-size: 20px;
//   margin-bottom: 8px;
// `;

// const Subtitle = styled.h3`
//   color: #666;
//   font-size: 16px;
//   margin-bottom: 4px;
// `;

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 8px;
// `;

// const DeleteButton = styled.button`
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

// // Component to render the admin card
// const AdminCard = ({ allusers, setAllUsers }) => {
 
  
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/api/admin/admin/users/${allusers.name}`);
//       // Remove the deleted user from the state
//       setAllUsers(prevUsers => prevUsers.filter(user => user.name !== allusers.name));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       // Implement error handling (e.g., show error message to the user)
//     }
//   };

//   return (
//     <Card>
//       <Title>{allusers.name}</Title>
//       <Subtitle>Email: {allusers.email}</Subtitle>
//       <Subtitle>Subscribers: {allusers.subscribers}</Subtitle>
//       <Subtitle>Joined at: {new Date(allusers.createdAt).toLocaleDateString()}</Subtitle>
//       {/* Render videos */}
//       <Subtitle>Videos:</Subtitle>
//       <List>
//         {allusers.videos.map(video => (
//           <ListItem key={video._id}>
//             <strong>Title:</strong> {video.title}<br />
//             <strong>Description:</strong> {video.desc}<br />
//             <strong>Views:</strong> {video.views}<br />
//           </ListItem>
//         ))}
//       </List>
//       {/* Render blogs */}
//       <Subtitle>Blogs:</Subtitle>
//       <List>
//         {allusers.blogs.map(blog => (
//           <ListItem key={blog._id}>
//             <strong>Title:</strong> {blog.title}<br />
//             <strong>Description:</strong> {blog.desc}<br />
//             <strong>Views:</strong> {blog.views}<br />
//           </ListItem>
//         ))}
//       </List>
//       {/* Render tweets */}
//       <Subtitle>Tweets:</Subtitle>
//       <List>
//         {allusers.tweets.map(tweet => (
//           <ListItem key={tweet._id}>
//             <strong>Tweet:</strong> {tweet.desc}<br />
//           </ListItem>
//         ))}
//       </List>
//       {/* Render feedbacks */}
//       <Subtitle>Feedbacks:</Subtitle>
//       <List>
//         {allusers.feedbacks.map(feedback => (
//           <ListItem key={feedback._id}>
//             <strong>Feedback:</strong> {feedback.feedbacks}<br />
//           </ListItem>
//         ))}
//       </List>
//       {/* Render music */}
//       <Subtitle>Music:</Subtitle>
//       <List>
//         {allusers.music.map(music => (
//           <ListItem key={music._id}>
//             <strong>Singer:</strong> {music.singer}<br />
//             <strong>Song Name:</strong> {music.songsname}<br />
//             <strong>Description:</strong> {music.desc}<br />
//           </ListItem>
//         ))}
//       </List>
      
//       {/* Delete Button */}
//       <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
//     </Card>
//   );
// };

// export default AdminCard;


//steps 3 level code

// export default AdminCard;
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios"

// Styled components for the card
const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  font-size: 20px;
  margin-bottom: 8px;
`;

const Subtitle = styled.h3`
  color: #666;
  font-size: 16px;
  margin-bottom: 4px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const DeleteButton = styled.button`
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

// Component to render the admin card
const AdminCard = ({userData, onDelete, allusers, setAllUsers }) => {
 

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/admin/admin/users/${allusers.name}`);
      // Remove the deleted user from the state
      onDelete(allusers._id);
      // setAllUsers(prevUsers => prevUsers.filter(user => user.name !== allusers.name));
    } catch (error) {
      console.error('Error deleting user:', error);
      // Implement error handling (e.g., show error message to the user)
    }
  };

  return (
    <Card>
      <Title>{allusers.name}</Title>
      <Subtitle>Email: {allusers.email}</Subtitle>
      <Subtitle>Subscribers: {allusers.subscribers}</Subtitle>
      <Subtitle>Joined at: {new Date(allusers.createdAt).toLocaleDateString()}</Subtitle>
      {/* Render videos */}
      <Subtitle>Videos:</Subtitle>
      <List>
        {allusers.videos.map(video => (
          <ListItem key={video._id}>
            <strong>Title:</strong> {video.title}<br />
            <strong>Description:</strong> {video.desc}<br />
            <strong>Views:</strong> {video.views}<br />
          </ListItem>
        ))}
      </List>
      {/* Render blogs */}
      <Subtitle>Blogs:</Subtitle>
      <List>
        {allusers.blogs.map(blog => (
          <ListItem key={blog._id}>
            <strong>Title:</strong> {blog.title}<br />
            <strong>Description:</strong> {blog.desc}<br />
            <strong>Views:</strong> {blog.views}<br />
          </ListItem>
        ))}
      </List>
      {/* Render tweets */}
      <Subtitle>Tweets:</Subtitle>
      <List>
        {allusers.tweets.map(tweet => (
          <ListItem key={tweet._id}>
            <strong>Tweet:</strong> {tweet.desc}<br />
          </ListItem>
        ))}
      </List>
      {/* Render feedbacks */}
      <Subtitle>Feedbacks:</Subtitle>
      <List>
        {allusers.feedbacks.map(feedback => (
          <ListItem key={feedback._id}>
            <strong>Feedback:</strong> {feedback.feedbacks}<br />
          </ListItem>
        ))}
      </List>
      {/* Render music */}
      <Subtitle>Music:</Subtitle>
      <List>
        {allusers.music.map(music => (
          <ListItem key={music._id}>
            <strong>Singer:</strong> {music.singer}<br />
            <strong>Song Name:</strong> {music.songsname}<br />
            <strong>Description:</strong> {music.desc}<br />
          </ListItem>
        ))}
      </List>
      
      {/* Delete Button */}
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </Card>
  );
};

export default AdminCard;
